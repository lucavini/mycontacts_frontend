import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;
  a {
    width: fit-content;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.1s ease-in;
    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    h1 {
      font-size: 24px;
    }

    &:hover {
       transform: scale(1.1);
    }
  }
`;
