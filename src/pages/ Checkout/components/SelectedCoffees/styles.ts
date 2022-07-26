import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
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


export const ResumeCart = styled.div`
  width: 28rem;
  padding: 2.5rem;
  margin-top: 0.938rem;
  border-radius: 6px 44px;
  background: ${({ theme }) => theme.colors["base-card"]};
`


export const CartTotalPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`


export const ServicesResume = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`


export const TextService = styled.span`
font-size: 0.875rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &.text-bold {
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
 }
`

export const ButtonSubmit = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.85rem 0;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors["brand-yellow"]};
  color: #FFFFFF;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
  
  `
