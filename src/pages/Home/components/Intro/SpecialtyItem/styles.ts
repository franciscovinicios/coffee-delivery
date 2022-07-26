import styled, { css } from "styled-components";

export const SpecialtieItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

 span {
  display: block;
  font-size: 1rem;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${({ theme }) => theme.colors["base-text"]};
  line-height: 1.5rem;
 }
`

interface ContainerCircleProps {
  color: string
}

export const ContainerCircle = styled.div<ContainerCircleProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ color }) => color === 'yellow-dark' && css`
    background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  `}

  ${({ color }) => color === 'yellow-light' && css`
    background-color: ${({ theme }) => theme.colors["brand-yellow"]};
  `}

  ${({ color }) => color === 'dark' && css`
    background-color: ${({ theme }) => theme.colors["base-text"]};
  `}

  ${({ color }) => color === 'purple' && css`
    background-color: ${({ theme }) => theme.colors["brand-purple"]};
  `}

  svg {
    color: ${({ theme }) => theme.colors["base-background"]};
  }
`

