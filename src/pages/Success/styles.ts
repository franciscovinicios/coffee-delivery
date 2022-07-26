import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`


export const ContainerText = styled.div`
  span.bold {
    display: block;
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-weight: 700;
  }
  span.light {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
  
`


export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
  > svg {
    width: 492rem;
    height: 18.313rem;
  }
`


export const OrderInfo = styled.div`
  width: 32.875rem;
  padding: 2.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors["base-background"]};
  
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
  
`


export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span.bold {
    font-weight: 700;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  
  &.map-pin {
    background: ${({ theme }) => theme.colors["brand-purple"]};
  }
  &.timer {
    background: ${({ theme }) => theme.colors["brand-yellow"]};
  }
  &.money {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
  > svg {
    color: ${({ theme }) => theme.colors["base-background"]};
  }
`


export const DescriptionOrder = styled.div``
