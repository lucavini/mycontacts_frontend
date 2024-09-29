import React from 'react';
import CategoryForm from '@Components/CategoryForm';
import PageHeader from '@Components/PageHeader';
import CategoryService from '~Services/CategoryService';
import toast from '~Utils/toast';

type CategoryFormRef = {
  setFieldValues: (category: models.Category) => void;
  setResetFields: () => void;
};

function NewCategory() {
  const CategoryFormRef = React.useRef<CategoryFormRef>({} as CategoryFormRef);

  async function handleSubmit(formData: models.Category) {
    try {
      const category = {
        ...formData,
        id: formData.id,
      };

      await CategoryService.createCategory(category);
      CategoryFormRef.current.setResetFields();

      toast({
        type: 'success',
        text: 'Categoria cadastrada com sucesso',
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar nova categoria!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Nova Categoria" />

      <CategoryForm
        ref={CategoryFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Cadastrar"
      />
    </>
  );
}

export default NewCategory;
