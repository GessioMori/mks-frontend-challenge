import { useGetProductsQuery } from "@/api";
import { MainContainer } from "@/styles/components/Container";
import { ProductsContainer } from "@/styles/components/Products";
import { ProductCard } from "./ProductCard";
import { ProductCardLoader } from "./ProductCardLoader";

export const Products = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (data) {
    return (
      <MainContainer>
        <ProductsContainer>
          {data.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ProductsContainer>
      </MainContainer>
    );
  }

  if (isLoading) {
    return (
      <MainContainer>
        <ProductsContainer>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <ProductCardLoader key={index} />
            ))}
        </ProductsContainer>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <ProductsContainer>
        <h1 style={{ textAlign: "center" }}>
          Houve um erro no carregamento dos produtos, tente novamente mais
          tarde!
        </h1>
      </ProductsContainer>
    </MainContainer>
  );
};
