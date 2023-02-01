import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100px;
  background-color: ${(props) => props.theme.colors.blue};

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  & > div {
    display: flex;
    align-items: baseline;
    cursor: pointer;
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: ${(props) => props.theme.radii.lg};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    cursor: pointer;
  }
`;

export const NavbarLogoMain = styled.span`
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.white};
`;

export const NavbarLogoSub = styled.span`
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.white};
`;
