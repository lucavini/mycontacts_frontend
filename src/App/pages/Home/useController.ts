import React from 'react';
import ContactService from '~Services/ContactService';

import toast from '~Utils/toast';

export interface Controller {
  filteredContacts: models.Contact[];
  contacts: models.Contact[];
  orderBy: string;
  searchTerm: string;
  isLoading: boolean;
  hasError: boolean;
  isDeleteModalVisible: boolean;
  isLoadingDelete: boolean;
  contactBeingDeleted: models.Contact | null;
  handleChangeModalVisibility: (contact?: models.Contact) => void;
  handleConfirmDeleteContact: () => void;
  handleToggleOrderBy: () => void;
  handleTryAgain: () => void;
  handleChangeSearchTerm: (value: string) => void;
}

function useController(): Controller {
  const [contacts, setContacts] = React.useState<models.Contact[]>([]);
  const [orderBy, setOrderBy] = React.useState('asc');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = React.useState(false);
  const [isLoadingDelete, setIsloadingDelete] = React.useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] =
    React.useState<models.Contact | null>(null);

  const filteredContacts = React.useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  const loadContact = React.useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  React.useEffect(() => {
    loadContact();
  }, [loadContact]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(value: string) {
    setSearchTerm(value);
  }

  function handleTryAgain() {
    loadContact();
  }

  function handleChangeModalVisibility(contact?: models.Contact) {
    setIsDeleteModalVisible((prevState) => !prevState);

    if (contact) {
      setContactBeingDeleted(contact);
    }
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsloadingDelete(true);
      await ContactService.deleteContact(contactBeingDeleted?.id ?? '');

      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== contactBeingDeleted?.id),
      );

      handleChangeModalVisibility();

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar contato!',
      });
    } finally {
      setIsloadingDelete(false);
    }
  }

  return {
    orderBy,
    searchTerm,
    isLoading,
    filteredContacts,
    isDeleteModalVisible,
    contacts,
    hasError,
    contactBeingDeleted,
    isLoadingDelete,
    handleConfirmDeleteContact,
    handleChangeModalVisibility,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  };
}

export default useController;
