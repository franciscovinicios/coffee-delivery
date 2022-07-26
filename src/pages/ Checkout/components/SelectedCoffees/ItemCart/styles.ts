import styled from "styled-components"

export const ItemCartContainer = styled.div`
  width: 100%;
`

export const ItemCartContent = styled.div`
  width: 23rem;
  display: flex;
  gap: 1.25rem;
  > img {
    width: 4rem;
    height: 4rem;
  }
`



export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  > div.text {
    display: flex;
    align-items: center;
    gap: 4.563rem
  }
  
`


export const TextItem = styled.span`
font-size: 1rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`

export const PriceItem = styled.span`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-weight: 700;
`


export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem; 
`



export const RemoveProductButton = styled.button`
  > svg {
  color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }

  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color:${({ theme }) => theme.colors["base-text"]} ;
  border-radius: 6px;
  border: none;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  cursor: pointer;
  
  `

export const Border = styled.div`
    border: 1px solid ${({ theme }) => theme.colors["base-button"]} ;
    margin: 1.5rem 0;

`
