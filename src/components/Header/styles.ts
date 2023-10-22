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

export const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors["brand-purple"]};
`;
