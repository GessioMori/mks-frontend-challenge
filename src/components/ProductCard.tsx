import ShopBagIcon from "@/assets/icons/ShoppingBagIcon.svg";
import Image from "next/image";
import {
  ProductCardContainer,
  ProductImage,
  ProductTitlePriceContainer,
  ProductDescription,
} from "@/styles/components/Products";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/features/cart";
import { ProductType } from "@/api";

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, description, photo } = props.product;
  const handleAddToCart = useDispatch();
  return (
    <ProductCardContainer>
      <ProductImage>
        <Image src={photo} alt={name} width={300} height={140} />
      </ProductImage>
      <ProductTitlePriceContainer>
        <span>{name}</span>
        <div>R${price.split(".")[0]}</div>
      </ProductTitlePriceContainer>
      <ProductDescription>{description}</ProductDescription>
      <button
        onClick={() =>
          handleAddToCart(addItem({ ...props.product, quantity: 0 }))
        }
        data-testid={`${name}-button`}
      >
        <Image src={ShopBagIcon} alt="Shopping bag icon" />
        <span>COMPRAR</span>
      </button>
    </ProductCardContainer>
  );
};
