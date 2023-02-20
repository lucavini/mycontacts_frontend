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
  contacts: Contact[];
  orderBy: string;
  handleToggleOrderBy: () => void;
}

export function controller(): Controller {
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [orderBy, setOrderBy] = React.useState('asc');

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

  return { contacts, orderBy, handleToggleOrderBy };
}
