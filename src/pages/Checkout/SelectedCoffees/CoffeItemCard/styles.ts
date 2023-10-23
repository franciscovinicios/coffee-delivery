import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CoffeeItemContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-size: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const RemoveCoffe = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  span {
    font-size: 0.75rem;
    line-height: 1.2rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors["base-text"]};
  }

  background-color: ${({ theme }) => theme.colors["base-button"]};
`;

export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-weight: 700;
`;

export const Divisor = styled.div`
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
`;
