import React from 'react';
import { Link } from 'react-router-dom';

import Loader from '@Components/Loader';
import Button from '@Components/Button';

import arrow from '~Assets/icons/arrow.svg';
import edit from '~Assets/icons/edit.svg';
import trash from '~Assets/icons/delete.svg';
import sad from '~Assets/images/sad.svg';

import {
  Card,
  Container,
  Header,
  ListHeader,
  InputSearchContainer,
  ErrorContainer,
} from './styles';
import useController from './useController';

function Home() {
  const {
    orderBy,
    searchTerm,
    filteredContacts,
    isLoading,
    hasError,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeSearchTerm,
  } = useController();

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={({ target }) => handleChangeSearchTerm(target.value)}
        />
      </InputSearchContainer>

      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />
          <div className="details">
            <strong>ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
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
                  {contact.category_name && (
                    <small>{contact.category_name}</small>
                  )}
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
        </>
      )}
    </Container>
  );
}

export default Home;
