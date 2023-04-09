import React from 'react';
import ContactService from '~Services/ContactService';

export interface Controller {
  filteredContacts: models.Contact[];
  orderBy: string;
  searchTerm: string;
  isLoading: boolean;
  hasError: boolean;
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

  const filteredContacts = React.useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  const loadContact = React.useCallback(async () => {
    setIsLoading(true);

    try {
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

  return {
    orderBy,
    searchTerm,
    isLoading,
    filteredContacts,
    hasError,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  };
}

export default useController;
