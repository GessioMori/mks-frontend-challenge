import styled from "styled-components";

interface CartProps {
  isOpen: boolean;
}

export const CartContainer = styled.div<CartProps>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  z-index: 1;
  right: 0;
  background-color: ${({ theme }) => theme.colors.blue};
  height: 100vh;
  width: min(30rem, 90vw);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  & > button {
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1.5rem 4rem;
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CartContent = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
`;

export const CartTitleContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.75rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};

  & > button {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 1.2rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.radii.full};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.75rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 2rem;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const CartItemContainer = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  & > span:first-of-type {
    width: 100%;
    text-align: center;
  }

  & > img {
    width: 5rem;
    height: 100%;
  }

  & > button {
    position: absolute;
    right: -0.6rem;
    top: -0.6rem;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    padding: 0.6rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.radii.full};

    &:hover {
      cursor: pointer;
      transition: width 0.1s, height 0.1s;

      @media screen and (min-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    @media screen and (max-width: 768px) {
      right: 0;
      top: 0;
      width: 2rem;
      height: 2rem;
      font-size: 2rem;
      margin: 1rem;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & > img {
      width: auto;
      height: 8rem;
    }
  }
`;

export const CartQuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > span:first-of-type {
      font-size: 0.8rem;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  & > span:last-child {
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    @media screen and (max-width: 768px) {
      font-size: 0.9375rem;
      padding: 0.25rem 0.375rem;
      height: 2rem;
      display: flex;
      align-items: center;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      background-color: ${({ theme }) => theme.colors.gray600};
      color: ${({ theme }) => theme.colors.white};
      border-radius: ${({ theme }) => theme.radii.md};
    }
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray300};

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
  }

  & > button {
    font-size: 0.75rem;
    padding: 0.1rem 0.5rem;
    background-color: transparent;
    height: 2rem;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray300};
    }
  }

  & > button:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii.sm};
    border-bottom-left-radius: ${({ theme }) => theme.radii.sm};
  }

  & > button:last-child {
    border-top-right-radius: ${({ theme }) => theme.radii.sm};
    border-bottom-right-radius: ${({ theme }) => theme.radii.sm};
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.gray300};
`;
