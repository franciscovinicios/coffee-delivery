import styled, { css } from "styled-components";

interface Props {
  variant: "yellow" | "purple";
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: 0.4s;
  ${({ variant }) =>
    variant === "yellow" &&
    css`
      background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
      svg {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
      }
      &:hover {
        svg {
          color: ${({ theme }) => theme.colors["brand-yellow-light"]};
        }
        background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
      }
    `}

  ${({ variant }) =>
    variant === "purple" &&
    css`
      background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
      svg {
        color: ${({ theme }) => theme.colors["base-card"]};
      }
      &:hover {
        svg {
        }
        background-color: ${({ theme }) => theme.colors["brand-purple"]};
      }
    `}
`;
