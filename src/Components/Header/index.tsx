import React from 'react';
import { Container, InputSearchContainer } from './styles';
import Logo from '../../assets/images/logo.svg';

function index() {
  return (
    <Container>
      <img src={Logo} alt="logo" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
    </Container>
  );
}

export default index;
