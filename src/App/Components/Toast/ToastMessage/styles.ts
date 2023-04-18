import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  error: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

type Props = {
  type: 'default' | 'error' | 'success';
};

export const Container = styled.div<Props>`
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

  strong {
    margin-left: 8px;
  }
`;
