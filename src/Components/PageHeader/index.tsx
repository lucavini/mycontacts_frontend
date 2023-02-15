import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Arrow from '../../assets/icons/arrow.svg';

type Props = {
  title: string;
};

function PageHeader({ title }: Props) {
  return (
    <Container>
      <Link to="/">
        <img src={Arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

export default PageHeader;
