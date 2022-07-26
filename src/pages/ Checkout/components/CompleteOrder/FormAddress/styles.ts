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

  input {
    padding-left: 0.75rem ;
    height: 2.625rem;
    width: 12.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    border-radius: 0.3rem;

    &.street {
      width: 100%;
    }

    &::placeholder {
      margin-left: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.125rem;
      color: ${({ theme }) => theme.colors["base-label"]};;
    }
  }
`;


export const InputText = styled.input`

  &.complement {
    flex: 1;
  }
  &.city {
    width: 17.25rem;
  }
  &.uf {
    width: 3.75rem;
  }
`

export const InputNumber = styled(InputText)`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const ContainerGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  
  
`