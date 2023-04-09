import React from 'react';
import PageHeader from 'Components/PageHeader';
import ContactForm from 'Components/ContactForm';

function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />

      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}

export default EditContact;
