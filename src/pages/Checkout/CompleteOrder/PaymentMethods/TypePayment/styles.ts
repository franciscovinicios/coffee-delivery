import styled, { css } from "styled-components";

export const TypeMethodInputContainer = styled.div`
  > input {
    visibility: hidden;
    appearance: none;

    &:checked + label div {
      ${({ theme }) => css`
        background: ${theme.colors["brand-purple-light"]};
        border: 1px solid ${theme.colors["brand-purple"]};
      `}
    }
  }
`;

export const TypeMethodContainer = styled.div`
  margin-left: 0.5rem;
  height: 3rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  user-select: none;

  > svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
    margin-left: 1.063rem;
  }
`;
