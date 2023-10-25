import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 5.75rem 0;

  @media (max-width: 1000px) {
    padding: 2rem 0;
  }

  @media (max-width: 478px) {
    padding: 0;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 3.5rem;

  @media (max-width: 1010px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    gap: 2rem;
  }
`;

export const IntroDescription = styled.section`
  width: 100%;

  @media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;

    gap: 1rem;
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 3.9rem;
  font-weight: 800;

  color: ${({ theme }) => theme.colors["base-title"]};

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const ImageIntro = styled.img`
  width: 29.75rem;
  height: 22.5rem;

  @media (max-width: 502px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const OurSkillContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;

  @media (max-width: 511px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }
`;
