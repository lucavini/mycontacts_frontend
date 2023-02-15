import React from 'react';
import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <Input type="text" placeholder="Nome" />

      <Select>
        <option value="123">Instagram</option>
        <option value="123">Linkedin</option>
        <option value="123">Facebook</option>
      </Select>
    </>
  );
}

export default NewContact;
