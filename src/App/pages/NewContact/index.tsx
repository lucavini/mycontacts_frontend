import React from 'react';
import ContactForm from '@Components/ContactForm';
import PageHeader from '@Components/PageHeader';
import ContactService from '~Services/ContactService';

function NewContact() {
  async function handleSubmit(formData: models.Contact) {
    try {
      const contact = {
        ...formData,
        category_id: formData.category_id,
      };

      const response = await ContactService.createContact(contact);
      console.log('response: ', response);
    } catch (error) {}
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm onSubmit={handleSubmit} buttonLabel="Cadastrar" />
    </>
  );
}

export default NewContact;
