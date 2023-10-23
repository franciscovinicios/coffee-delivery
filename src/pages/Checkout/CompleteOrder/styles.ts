import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  width: 40rem;
`;
export const TitleSection = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125em;
  font-weight: 700;
  line-height: 1.4625em;
  display: block;
  margin-bottom: 0.9375em;

  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;
