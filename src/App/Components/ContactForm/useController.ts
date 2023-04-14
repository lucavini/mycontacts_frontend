import React from 'react';

import useErrors from 'Shared/hooks/useErrors';
import isEmailValid from 'Shared/utils/isEmailValid';
import formatPhone from 'Shared/utils/formatPhone';

import CategoryService from '~Services/CategoryService';

interface Controller {
  isFormValid: boolean | string;
  name: string;
  email: string;
  phone: string;
  category: string;
  categories: models.Category[];
  isLoadingCategories: boolean;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleNameChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  gerErrorMessageByFieldName: (
    fieldName: 'name' | 'email' | 'phone',
  ) => string | undefined;
}

function useController(): Controller {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [categories, setCategories] = React.useState<models.Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = React.useState(true);

  const { errors, setError, removeError, gerErrorMessageByFieldName } =
    useErrors<'name' | 'email' | 'phone'>();

  const isFormValid = name && errors.length === 0;

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
  }, []);

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

  return {
    name,
    email,
    phone,
    category,
    categories,
    isFormValid,
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
