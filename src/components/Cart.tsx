import { calculateTotal, toggleCart } from "@/redux/features/cart";
import { RootState } from "@/redux/store";
import {
  CartContainer,
  CartContent,
  CartList,
  CartTitleContainer,
  CartTotalContainer,
} from "@/styles/components/Cart";

import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const items = useSelector((state: RootState) => state.cart.list);
  const total = useSelector((state: RootState) =>
    calculateTotal(state.cart.list)
  );
  const handleToggleCart = useDispatch();

  return (
    <CartContainer isOpen={isOpen} data-testid="cart-modal">
      <CartContent>
        <CartTitleContainer>
          <span>Carrinho de compras</span>
          <button
            onClick={() => handleToggleCart(toggleCart())}
            data-testid="close-button"
          >
            X
          </button>
        </CartTitleContainer>
        <CartList>
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </CartList>
        <CartTotalContainer>
          {items.length === 0 ? (
            <span data-testid="empty-cart">Carrinho vazio</span>
          ) : (
            <>
              <span>Total:</span>
              <span data-testid="total-price">R${total}</span>
            </>
          )}
        </CartTotalContainer>
      </CartContent>
      <button>
        <span>Finalizar compra</span>
      </button>
    </CartContainer>
  );
};
