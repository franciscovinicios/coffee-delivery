import styled from "styled-components";

export const SelecetedCoffeesContainer = styled.div`
  flex: 1;
  border-radius: 6px 44px;
`;

export const ResumeCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const ButtonSubmit = styled.button`
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors["brand-yellow"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  font-weight: 700;
  line-height: 1.4rem;
  text-transform: uppercase;

  padding: 12px 8px;
  border: transparent;
  border-radius: 6px;
`;
