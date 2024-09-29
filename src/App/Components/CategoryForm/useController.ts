import React from 'react';

import useErrors from 'Shared/hooks/useErrors';

type CategoryFormRef = {
  setFieldValues: (contact: models.Category) => void;
  setResetFields: () => void;
};

type IProps = {
  onSubmit: (contact: models.Category) => Promise<void>;
  ref: React.ForwardedRef<CategoryFormRef>;
};

function useController({ onSubmit, ref }: IProps) {
  const [name, setName] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    setFieldValues: (category: models.Category) => {
      setName(category.name ?? '');
    },

    setResetFields: () => {
      setName('');
    },
  }), []);

  const { errors, setError, removeError, gerErrorMessageByFieldName } =
    useErrors<'name'>();

  const isFormValid = name && errors.length === 0;

  function handleNameChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);

    if (!target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório.',
      });
    } else {
      removeError('name');
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      id: '',
    });

    setIsSubmitting(false);
  }

  return {
    name,
    isFormValid,
    isSubmitting,
    handleSubmit,
    handleNameChange,
    gerErrorMessageByFieldName,
  };
}

export default useController;
