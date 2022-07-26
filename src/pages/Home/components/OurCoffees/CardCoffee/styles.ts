import styled from "styled-components"

export const CoffeItem = styled.div`
  width: 16rem;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  display: flex;
  flex-direction: column;
  border-radius:6px 36px;
  text-align: center;
  margin-bottom: 3rem;
`

export const ImageCoffe = styled.div`
  margin-top: -1rem;
  margin-bottom: 0.3rem;
  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const DescriptionContainer = styled.div`
`

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 0.3rem;
`

export const Type = styled.span`
background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
display: block;
padding: 0.35rem;
border-radius: 6rem;
font-size: 0.625rem;
font-weight: 700;
font-family: 'Roboto';
line-height: 13px;
text-transform: uppercase;
 
`

export const TitleCoffe = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Baloo 2';
  line-height: 1.625rem;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors["base-subtitle"]};;
`

export const Description = styled.span`
  padding: 0 1.25rem;
  display: block;
  display: block;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Roboto';
  line-height: 1.125rem;
  color: ${({ theme }) => theme.colors["base-label"]};
  margin-bottom: 2.063rem;
`

export const AddItemCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1.25rem;
`

export const Price = styled.div`
  text-align: center;
  
  span {
    color: ${({ theme }) => theme.colors["base-text"]};
  
  &.money {
    font-size: 0.875rem;
    line-height: 2.125;
    font-family: 'Roboto';
  }

  &.price {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.938rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    margin-left: 0.1rem;
  }
}
`
export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`


export const IconAddToCart = styled.button`
  background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  border: none;
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  svg {
    color: ${({theme}) => theme.colors["base-card"]}
  }
  transition:  background-color 1s;
  
  &:hover {
    background-color: ${({theme}) => theme.colors["brand-purple"]};
  }
`