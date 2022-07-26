import styled from "styled-components"

export const PaymentMethodsContainer = styled.div`
  width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`

export const DescriptionForm = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`
export const ContainerIcon = styled.div`
  svg {
    color:${({ theme }) => theme.colors["brand-purple"]} ;
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

export const PaymentTypes = styled.div`

  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3,1fr);
  gap: 0.75rem;
`