import styled, { css } from "styled-components";

export const SucessContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const TextSucessDelivery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  line-height: 2.6rem;
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.625rem;
`;

export const OrderDetails = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors["base-background"]};
  width: 32.875rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px 36px;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  color: "purple" | "yellow-light" | "yellow-dark";
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors["base-white"]};

  border-radius: 1000px;

  ${({ theme, color }) =>
    color === "purple" &&
    css`
      background-color: ${theme.colors["brand-purple"]};
    `}

  ${({ theme, color }) =>
    color === "yellow-light" &&
    css`
      background-color: ${theme.colors["brand-yellow"]};
    `}

    ${({ theme, color }) =>
    color === "yellow-dark" &&
    css`
      background-color: ${theme.colors["brand-yellow-dark"]};
    `}
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 1rem;
  line-height: 1.3rem;

  span {
    font-weight: 700;
  }
`;

export const Image = styled.img``;
