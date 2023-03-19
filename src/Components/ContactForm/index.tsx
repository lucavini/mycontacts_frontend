/* eslint-disable @typescript-eslint/indent */
import React from 'react';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../Shared/hooks/useErrors';

import { Form, ButtonContainer } from './styles';

type Props = {
  buttonLabel: string;
};

function ContactForm({ buttonLabel }: Props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [category, setCategory] = React.useState('');

  const { errors, setError, removeError, gerErrorMessageByFieldName } =
    useErrors<'name' | 'email' | 'phone'>();

  const isFormValid = name && errors.length === 0;

  function handleNameChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);

    if (!target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('email');
    }
  }

  function handleEmailChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setEmail(target.value);

    if (target.value && !isEmailValid(target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(target.value));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={gerErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={!!gerErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={gerErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          error={!!gerErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

export default ContactForm;
