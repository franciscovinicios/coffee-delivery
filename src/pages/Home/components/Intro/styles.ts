import styled from "styled-components";

export const IntroContainer = styled.section`
  margin-top: 5.875rem;

> div.content {
  display: flex;
  gap: 3.5rem;
}
`

export const Title = styled.h3`
  font-size: 3rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.colors["base-title"]};

`
export const Subtitle = styled.span`
  display: block;
  margin-top: 1rem ;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

`

export const Specialties = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  
  row-gap: 1.25rem;
  margin-top: 4.125rem; 
`

export const CoffeeImg = styled.aside`
  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`