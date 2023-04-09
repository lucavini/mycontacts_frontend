import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 25px;
    height: 50px;
    background: #fff;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0px 16px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bcbcbb;
    }
  }
`;

type HeaderProps = {
  justifyContent?: string;
};

export const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  ${({ justifyContent }) => css`
    justify-content: ${justifyContent ?? 'space-between'};
  `}
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 16px;

  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-top: 8px;
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  `;

export const SearchNotfound = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  
  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 24px;
    word-break: break-word;
  }
`;

type Props = {
  orderBy: string;
};

export const ListHeader = styled.header<Props>`
  margin-top: 24px;

  margin-bottom: 8px;
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transition: 0.2s ease-in-out;
      ${({ orderBy }) => css`
        transform: ${orderBy === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)'};
      `}
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray['200']};
    }
  }

  .action {
    display: flex;
    align-items: center;

    a {
      margin-left: 8px;
    }
  }
`;
