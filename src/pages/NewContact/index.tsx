import React from 'react';
import ContactForm from 'Components/ContactForm';
import PageHeader from 'Components/PageHeader';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}

export default NewContact;
