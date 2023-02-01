import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 58.625rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: center;
`;

export const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  height: 17.8rem;
  width: 13.625rem;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 0.2rem 0.7rem;
  padding-bottom: 2.5rem;

  & > button {
    position: absolute;
    bottom: 0;
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    border-bottom-left-radius: ${({ theme }) => theme.radii.lg};
    border-bottom-right-radius: ${({ theme }) => theme.radii.lg};

    &:hover {
      filter: brightness(1.1);
      cursor: pointer;
    }
  }
`;

export const ProductImage = styled.div`
  & > img {
    width: auto;
    height: 8.75rem;
  }
`;

export const ProductTitlePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
  height: 2.40625rem;

  & > span {
    overflow: hidden;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & > div {
    font-size: 0.9375rem;
    padding: 0.25rem 0.375rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background-color: ${({ theme }) => theme.colors.gray600};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
