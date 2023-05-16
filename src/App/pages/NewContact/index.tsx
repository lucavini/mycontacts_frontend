import React from 'react';
import ContactForm from '@Components/ContactForm';
import PageHeader from '@Components/PageHeader';
import ContactService from '~Services/ContactService';
import toast from '~Utils/toast';

type ContactFormRef = {
  setFieldValues: (contact: models.Contact) => void;
  setResetFields: () => void;
};

function NewContact() {
  const contactFormRef = React.useRef<ContactFormRef>({} as ContactFormRef);

  async function handleSubmit(formData: models.Contact) {
    try {
      const contact = {
        ...formData,
        category_id: formData.category_id,
      };

      await ContactService.createContact(contact);
      contactFormRef.current.setResetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso',
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Cadastrar"
      />
    </>
  );
}

export default NewContact;
