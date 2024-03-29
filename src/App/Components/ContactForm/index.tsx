import React from 'react';

import FormGroup from '@Components/FormGroup';
import Input from '@Components/Input';
import Select from '@Components/Select';
import Button from '@Components/Button';

import useController from './useController';

import { Form, ButtonContainer } from './styles';

type Props = {
  buttonLabel: string;
  onSubmit: (contact: models.Contact) => Promise<void>;
};

type ContactFormRef = {
  setFieldValues: (contact: models.Contact) => void;
  setResetFields: () => void;
};

const ContactForm = React.forwardRef<ContactFormRef, Props>(
  ({ buttonLabel, onSubmit }: Props, ref) => {
    const {
      name,
      email,
      phone,
      category,
      categories,
      isFormValid,
      isSubmitting,
      isLoadingCategories,
      setCategory,
      handleSubmit,
      handleNameChange,
      handlePhoneChange,
      handleEmailChange,
      gerErrorMessageByFieldName,
    } = useController({ onSubmit, ref });

    return (
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup error={gerErrorMessageByFieldName('name')}>
          <Input
            placeholder="Nome *"
            value={name}
            onChange={handleNameChange}
            error={!!gerErrorMessageByFieldName('name')}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup error={gerErrorMessageByFieldName('email')}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            error={!!gerErrorMessageByFieldName('email')}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder="Telefone"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={15}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup isLoading={isLoadingCategories}>
          <Select
            value={category}
            onChange={({ target }) => setCategory(target.value)}
            disabled={isLoadingCategories || isSubmitting}
          >
            <option value="">Categoria</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <ButtonContainer>
          <Button
            type="submit"
            disabled={!isFormValid}
            isLoading={isSubmitting}
          >
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </Form>
    );
  },
);

export default ContactForm;
