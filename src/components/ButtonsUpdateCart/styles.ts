

import styled from "styled-components";

export const ContainerButtonsUpdateCart = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  >span {
    padding: 0 0.4rem;
  }
`

export const ContainerIcon = styled.button`
background: none;
border: none;
width: 0.875rem;
height: 0.875rem;
cursor: pointer;
> svg {
  color: ${({ theme }) => theme.colors["brand-purple"]};
}

&:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    > svg {
    }
  }
`