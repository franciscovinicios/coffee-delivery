import styled from "styled-components";

export const CartTotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ServiceResumeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextService = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &.price {
    font-size: 1rem;
  }

  &.bold {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;
