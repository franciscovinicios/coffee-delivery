import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 2.5em;
`;
export const CompleteOrderContainer = styled.div``;
export const FormAdressContainer = styled.div``;
export const TitleSection = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125em;
  font-weight: 700;
  line-height: 1.4625em;

  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;
export const FormContent = styled.div`
  margin-top: 0.9375em;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5em;
  width: 40rem;
`;
export const DescrptionForm = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const IconContainer = styled.div`
  svg {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 2rem;
`;
export const TextTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 1.1375rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &.bold {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    line-height: 1.3rem;
  }
`;

export const AdreessFormContent = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`;
