import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.625rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
export const InputStyled = styled.input`
  flex: 1;

  background: none;
  border: none;
  height: 100%;
  outline-width: 0;
  padding-left: 0.75rem;

  color: ${({ theme }) => theme.colors["base-label"]};
  font-size: 0.875rem;

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin: 0 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors["base-label"]};
`;
