import React from 'react';

import {
  Card,
  Container,
  Header,
  ListContainer,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/delete.svg';

function index() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Lucas Santos</strong>
              <small>intagram</small>
            </div>

            <span>lucas@gmail.com</span>
            <span>(89) 9999-9999</span>
          </div>

          <div className="action">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <a href="/">
              <img src={trash} alt="trash" />
            </a>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

export default index;
