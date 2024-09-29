import React from 'react';

import useErrors from 'Shared/hooks/useErrors';
import isEmailValid from 'Shared/utils/isEmailValid';
import formatPhone from 'Shared/utils/formatPhone';

import useSafeAsyncState from 'Shared/hooks/useSafeAsyncState';
import CategoryService from '~Services/CategoryService';

type ContactFormRef = {
  setFieldValues: (contact: models.Contact) => void;
  setResetFields: () => void;
};

type IProps = {
  onSubmit: (contact: models.Contact) => Promise<void>;
  ref: React.ForwardedRef<ContactFormRef>;
};

function useController({ onSubmit, ref }: IProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [categories, setCategories] = useSafeAsyncState<models.Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    setFieldValues: (contact: models.Contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(formatPhone(contact.phone) ?? '');
      setCategory(contact.category_id ?? '');
    },

    setResetFields: () => {
      setName('');
      setEmail('');
      setPhone('');
      setCategory('');
    },
  }), []);

  const { errors, setError, removeError, gerErrorMessageByFieldName } =
    useErrors<'name' | 'email' | 'phone'>();

  const isFormValid = name && category && email && errors.length === 0;

  React.useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoadingCategories(true);
        const categoriesList = await CategoryService.listCategories();
        setCategories(categoriesList);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, [setCategories, setIsLoadingCategories]);

  function handleNameChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);

    if (!target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório.',
      });
    } else {
      removeError('email');
    }
  }

  function handleEmailChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setEmail(target.value);

    if (target.value && !isEmailValid(target.value)) {
      setError({
        field: 'email',
        message: 'E-mail inválido',
      });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(target.value));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      category_id: category,
      category_name: '',
      id: '',
    });

    setIsSubmitting(false);
  }

  return {
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
    handleEmailChange,
    handlePhoneChange,
    gerErrorMessageByFieldName,
  };
}

export default useController;
