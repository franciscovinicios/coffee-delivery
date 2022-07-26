import styled from "styled-components";


export const FormAddressContainer = styled.div`
  margin-top: 2.5rem;
`

export const TextTitleSection = styled.span`
  display: block;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 1.463rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`

export const FormContent = styled.div`
  margin-top: 0.938rem;
  width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`


export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
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

export const DescriptionForm = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const ContainerIcon = styled.div`
  svg {
    color:${({ theme }) => theme.colors["brand-yellow-dark"]} ;
  }
`


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const TextTitle = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;

  &.bold {
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-weight: 400;
  }  
`

export const FormInputsAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;


`;



export const ContainerGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  
  
`