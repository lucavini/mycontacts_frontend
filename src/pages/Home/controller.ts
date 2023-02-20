import React from 'react';

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
  handleToggleOrderBy: () => void;
  handleChangeSearchTerm: (value: string) => void;
}

export function controller(): Controller {
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [orderBy, setOrderBy] = React.useState('asc');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredContacts = React.useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  React.useEffect(() => {
    fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
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
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  };
}
