import {
  CartItemType,
  removeItem,
  addItem,
  deleteItem,
} from "@/redux/features/cart";
import {
  CartItemContainer,
  CartItemQuantity,
  CartQuantityPriceContainer,
  Divider,
} from "@/styles/components/Cart";
import Image from "next/image";
import { useDispatch } from "react-redux";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { name, price, photo, quantity } = item;
  const handleDispatch = useDispatch();
  return (
    <CartItemContainer data-testid={`${name}-cart-item`}>
      <button
        onClick={() => handleDispatch(deleteItem(item))}
        data-testid={`${name}-delete-button`}
      >
        X
      </button>
      <Image src={photo} alt={name} width={300} height={140} />
      <span>{name}</span>
      <CartQuantityPriceContainer>
        <div>
          <span>Qtd:</span>
          <CartItemQuantity>
            <button
              onClick={() => handleDispatch(removeItem(item))}
              data-testid={`${name}-remove-button`}
            >
              -
            </button>
            <Divider />
            <span data-testid={`${name}-quantity`}>{quantity}</span>
            <Divider />
            <button
              onClick={() => handleDispatch(addItem(item))}
              data-testid={`${name}-add-button`}
            >
              +
            </button>
          </CartItemQuantity>
        </div>
        <span>R${price.split(".")[0]}</span>
      </CartQuantityPriceContainer>
    </CartItemContainer>
  );
};
