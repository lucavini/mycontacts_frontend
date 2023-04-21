import React from 'react';
import ContactForm from '@Components/ContactForm';
import PageHeader from '@Components/PageHeader';
import ContactService from '~Services/ContactService';
import toast from '~Utils/toast';

function NewContact() {
  async function handleSubmit(formData: models.Contact) {
    try {
      const contact = {
        ...formData,
        category_id: formData.category_id,
      };

      await ContactService.createContact(contact);
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

      <ContactForm onSubmit={handleSubmit} buttonLabel="Cadastrar" />
    </>
  );
}

export default NewContact;
