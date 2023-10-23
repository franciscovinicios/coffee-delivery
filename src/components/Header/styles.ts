import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
`;

export const Locale = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors["brand-purple-light"]};

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    height: 1.25rem;
    border-radius: 50%;
    top: -0.5rem;

    right: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors["brand-purple"]};
`;
