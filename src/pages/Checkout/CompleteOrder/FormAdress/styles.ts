import styled from "styled-components";

export const FormAdressContainer = styled.div``;

export const FormContent = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5em;
  width: 40rem;
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
