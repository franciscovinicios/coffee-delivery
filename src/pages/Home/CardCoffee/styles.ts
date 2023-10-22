import styled from "styled-components";
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 1.25rem;
  border-radius: 0.375em 36px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  margin-top: -2.4rem;
`;
export const TagsContent = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;
export const TagItem = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

  font-size: 0.625em;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;

  padding: 0.25em 0.5em;
  border-radius: 100px;
`;
export const Title = styled.p`
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors["base-subtitle"]};

  font-size: 1.25em;
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  line-height: 1.625em;
  text-align: center;
`;
export const Subtitle = styled.span`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors["base-label"]};
  font-size: 0.875em;
  line-height: 1.1375em;
  text-align: center;
`;

export const BuyContainer = styled.div`
  width: 100%;
  margin-top: 2.0625em;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PriceContainer = styled.div``;

export const Money = styled.span`
  font-size: 0.875em;
  font-family: "Roboto", sans-serif;
  line-height: 1.1375em;

  color: ${({ theme }) => theme.colors["base-text"]};
`;

export const PriceContent = styled.span`
  font-size: 1.5em;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;

  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors["base-text"]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
`;
