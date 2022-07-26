import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`


export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`


interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  height: 2.375rem;
  padding: 0 0.5rem;
  border: none;
  border-radius: 5px;
  gap: 4px;
  position: relative;

  
  span {
    position: absolute;
    position: absolute;
    width: 1.25rem;
    background-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    color: ${({theme}) => theme.colors["base-white"]};
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
  
  ${({ variant }) =>
    variant === "purple" &&
    css`
    background: ${({ theme }) => theme.colors["brand-purple-light"]};
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    font-weight: 400;
    svg {
      color: ${({theme}) => theme.colors["brand-purple"]}
    }
  `}
  ${({ variant }) =>
    variant === "yellow" &&
    css`
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    
    svg {
      color: ${({theme}) => theme.colors["brand-yellow-dark"]}
    }
  `}
` 
