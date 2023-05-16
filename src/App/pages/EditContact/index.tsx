import React from 'react';
import PageHeader from '@Components/PageHeader';
import ContactForm from '@Components/ContactForm';
import { useParams, useHistory } from 'react-router-dom';
import Loader from '@Components/Loader';
import ContactService from '~Services/ContactService';
import toast from '~Utils/toast';

type ContactFormRef = {
  setFieldValues: (contact: models.Contact) => void;
};

function EditContact() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [contactName, setContactName] = React.useState('');
  const contactFormRef = React.useRef<ContactFormRef>({} as ContactFormRef);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  React.useEffect(() => {
    async function loadContact() {
      try {
        const contactData: models.Contact = await ContactService.getContactById(
          id,
        );
        contactFormRef.current.setFieldValues(contactData);
        setContactName(contactData.name);

        setIsLoading(false);
      } catch (error) {
        history.push('/');
        toast({ type: 'danger', text: 'Erro ao buscar contato' });
      }
    }

    loadContact();
  }, [id, history]);

  async function handleSubmit(formData: models.Contact) {
    console.log('formData: ', formData);
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carrengando...' : `Editar ${contactName}`} />

      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar alterações"
      />
    </>
  );
}

export default EditContact;
