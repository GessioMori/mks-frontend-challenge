import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 2.125rem;
  background-color: ${(props) => props.theme.colors.gray300};
`;

export const FooterText = styled.span`
  font-size: 0.75rem;
`;
