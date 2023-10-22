import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25em;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  padding: 0.5em;
  border-radius: 6px;
`;

export const IconContent = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`;

export const AmountText = styled.span`
  padding: 0 0.3rem;
  color: ${({ theme }) => theme.colors["base-title"]};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.3em;
  text-align: center;
`;
