import React, { useEffect } from 'react';
import ContactService from '../../Services/ContactService';

interface Contact {
  category_id: string;
  category_name: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}

export interface Controller {
  filteredContacts: Contact[];
  orderBy: string;
  searchTerm: string;
  isLoading: boolean;
  handleToggleOrderBy: () => void;
  handleChangeSearchTerm: (value: string) => void;
}

export function controller(): Controller {
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [orderBy, setOrderBy] = React.useState('asc');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const filteredContacts = React.useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  useEffect(() => {
    async function loadContact() {
      setIsLoading(true);

      try {
        const contactsList = await ContactService.listContacts(orderBy);
        setContacts(contactsList);
      } catch (error) {
        console.log('caiu no catch: ', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContact();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(value: string) {
    setSearchTerm(value);
  }

  return {
    orderBy,
    searchTerm,
    isLoading,
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  };
}
