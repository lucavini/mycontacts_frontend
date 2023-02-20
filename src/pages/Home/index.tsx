import React from 'react';
import { Link } from 'react-router-dom';
import { controller } from './controller';
import {
  Card,
  Container,
  Header,
  ListHeader,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/delete.svg';

function Home() {
  const {
    orderBy,
    searchTerm,
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  } = controller();

  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={({ target }) => handleChangeSearchTerm(target.value)}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      {!!filteredContacts.length && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="action">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="edit" />
            </Link>
            <Link to="/">
              <img src={trash} alt="trash" />
            </Link>
          </div>
        </Card>
      ))}
    </Container>
  );
}

export default Home;
