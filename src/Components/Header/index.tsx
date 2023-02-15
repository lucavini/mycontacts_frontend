import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" width="201" />
    </Container>
  );
}

export default Header;
