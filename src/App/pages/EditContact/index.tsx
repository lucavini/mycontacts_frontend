import React from 'react';
import PageHeader from '@Components/PageHeader';
import ContactForm from '@Components/ContactForm';

function EditContact() {
  async function handleSubmit(formData: models.Contact) {
    console.log('formData: ', formData);
  }
  return (
    <>
      <PageHeader title="Editar Contato" />

      <ContactForm onSubmit={handleSubmit} buttonLabel="Salvar alterações" />
    </>
  );
}

export default EditContact;
