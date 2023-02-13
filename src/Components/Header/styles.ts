import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    border-radius: 25px;
    height: 50px;
    background: #fff;
    border: none;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));
    padding: 0px 16px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bcbcbb;
    }
  }
`;
