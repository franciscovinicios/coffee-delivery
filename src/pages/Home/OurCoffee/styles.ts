import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h6`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  font-family: "Baloo 2", sans-serif;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const OurCoffeesContent = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-gap: 2.5rem 2rem;

  grid-template-columns: repeat(4, 1fr);
`;
