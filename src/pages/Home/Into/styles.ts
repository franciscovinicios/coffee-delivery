import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 5.75rem 0;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 3.5rem;
`;

export const IntroDescription = styled.section`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 3.9rem;
  font-weight: 800;

  color: ${({ theme }) => theme.colors["base-title"]};
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const ImageIntro = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`;

export const OurSkillContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
`;
