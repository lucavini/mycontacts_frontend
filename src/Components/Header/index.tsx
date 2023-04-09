import React from 'react';
import Logo from '~Assets/images/logo.svg';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" width="201" />
    </Container>
  );
}

export default Header;
