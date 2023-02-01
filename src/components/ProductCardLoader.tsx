import Image from "next/image";
import {
  ProductCardContainer,
  ProductImage,
} from "@/styles/components/Products";
import Loader from "@/assets/icons/Loader.svg";

export const ProductCardLoader = () => {
  return (
    <ProductCardContainer>
      <ProductImage>
        <Image
          src={Loader}
          alt="Loader spinner"
          width={300}
          height={140}
          data-testid="loader-spinner"
        />
      </ProductImage>
    </ProductCardContainer>
  );
};
