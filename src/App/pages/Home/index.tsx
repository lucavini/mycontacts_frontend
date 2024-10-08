/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from '@Components/Loader';
import Button from '@Components/Button';
import Modal from '@Components/Modal';

import arrow from '~Assets/icons/arrow.svg';
import edit from '~Assets/icons/edit.svg';
import trash from '~Assets/icons/delete.svg';
import sad from '~Assets/images/sad.svg';
import box from '~Assets/images/empty-box.svg';
import magnifierQuestion from '~Assets/images/magnifier-question.svg';

import {
  Card,
  Container,
  Header,
  ListHeader,
  InputSearchContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotfound,
} from './styles';

import useController from './useController';

function Home() {
  const {
    orderBy,
    searchTerm,
    isDeleteModalVisible,
    contacts,
    isLoading,
    hasError,
    contactBeingDeleted,
    isLoadingDelete,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeModalVisibility,
    handleConfirmDeleteContact,
    handleChangeSearchTerm,
  } = useController();

  const [filteredContacts, setFilteredContacts] = useState<models.Contact[]>(
    [],
  );

  React.useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  React.useEffect(() => {
    if (searchTerm === '') {
      setFilteredContacts(contacts);
    }
  }, [contacts, searchTerm]);

  const searchContact = () => {
    const script = document.createElement('script');
    script.text = searchTerm;
    document.body.appendChild(script);

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredContacts(filtered);

    setTimeout(() => {
      document.body.removeChild(script);
    }, 0);
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja deletar o contato "${contactBeingDeleted?.name}" ?`}
        isLoading={isLoadingDelete}
        confirmButtonProps={{
          label: 'Deletar',
          onClick: handleConfirmDeleteContact,
        }}
        cancelButtonProps={{
          onClick: handleChangeModalVisibility,
        }}
      >
        <p>Essa ação não poderá ser desfeita!</p>
      </Modal>

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar contato"
            value={searchTerm}
            onChange={({ target }) => handleChangeSearchTerm(target.value)}
          />

          <button type="submit" onClick={searchContact}>
            Buscar
          </button>
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : contacts.length > 0
              ? 'space-between'
              : 'center'
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
        <Link to="/newcategory">Nova Categoria</Link>
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
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={box} alt="emptybox" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <strong> ”Novo contato” </strong>à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotfound>
              <img src={magnifierQuestion} alt="magnifier Question" />
              <span>
                Nenhum resultado foi encontrado para
                <div dangerouslySetInnerHTML={{ __html: searchTerm }} />
              </span>
            </SearchNotfound>
          )}

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
                <button onClick={() => handleChangeModalVisibility(contact)} type="button">
                  <img src={trash} alt="trash" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

export default Home;
