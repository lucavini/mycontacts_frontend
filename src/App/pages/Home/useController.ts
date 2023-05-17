import React from 'react';
import ContactService from '~Services/ContactService';

export interface Controller {
  filteredContacts: models.Contact[];
  contacts: models.Contact[];
  orderBy: string;
  searchTerm: string;
  isLoading: boolean;
  hasError: boolean;
  isDeleteModalVisible: boolean;
  contactBeingDeleted: models.Contact | undefined;
  handleChangeModalVisibility: () => void;
  handleDeleteContact: (contact: models.Contact) => void;
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
  const [contactBeingDeleted, setContactBeingDeleted] = React.useState<models.Contact>();

  const filteredContacts = React.useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

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

  function handleChangeModalVisibility() {
    setIsDeleteModalVisible((prevState) => !prevState);
  }

  function handleDeleteContact(contact: models.Contact) {
    handleChangeModalVisibility();
    setContactBeingDeleted(contact);
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
    handleDeleteContact,
    handleChangeModalVisibility,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  };
}

export default useController;
