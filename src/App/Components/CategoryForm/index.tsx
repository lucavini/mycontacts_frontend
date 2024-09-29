import React from 'react';

import FormGroup from '@Components/FormGroup';
import Input from '@Components/Input';
import Button from '@Components/Button';

import useController from './useController';

import { Form, ButtonContainer } from './styles';

type Props = {
  buttonLabel: string;
  onSubmit: (category: models.Category) => Promise<void>;
};

type CategoryFormRef = {
  setFieldValues: (category: models.Category) => void;
  setResetFields: () => void;
};

const CategoryForm = React.forwardRef<CategoryFormRef, Props>(
  ({ buttonLabel, onSubmit }: Props, ref) => {
    const {
      name,
      isFormValid,
      isSubmitting,
      handleSubmit,
      handleNameChange,
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

export default CategoryForm;
