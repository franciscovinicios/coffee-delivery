import styled, { css } from "styled-components";

export type Colors = "yellow-dark" | "yellow-ligth" | "dark" | "purple";

interface IconContentProps {
  color: Colors;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContent = styled.div<IconContentProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) =>
    color === "yellow-dark" &&
    css`
      background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    `}

  ${({ color }) =>
    color === "yellow-ligth" &&
    css`
      background-color: ${({ theme }) => theme.colors["brand-yellow"]};
    `}


  ${({ color }) =>
    color === "dark" &&
    css`
      background-color: ${({ theme }) => theme.colors["base-text"]};
    `}


    ${({ color }) =>
    color === "purple" &&
    css`
      background-color: ${({ theme }) => theme.colors["brand-purple"]};
    `}

    svg {
    color: ${({ theme }) => theme.colors["base-background"]};
  }
`;

export const Description = styled.span``;
