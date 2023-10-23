import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};
`;
export const PaymentTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;
