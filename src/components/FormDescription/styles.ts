import styled, { css } from "styled-components";

export const DescrptionForm = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface IconContainerProps {
  variant: "yellow" | "purple";
}
export const IconContainer = styled.div<IconContainerProps>`
  ${({ variant, theme }) =>
    variant === "yellow" &&
    css`
      color: ${theme.colors["brand-yellow-dark"]};
    `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      color: ${theme.colors["brand-purple"]};
    `}
`;

export const TextContainer = styled.div`
  margin-bottom: 2rem;
`;
export const TextTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 1.1375rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &.bold {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    line-height: 1.3rem;
  }
`;
