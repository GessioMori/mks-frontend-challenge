import {
  NavbarContainer,
  NavbarLogoMain,
  NavbarLogoSub,
} from "@/styles/components/Navbar";
import Image from "next/image";
import CartIcon from "@/assets/icons/CartIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmountOfItems, toggleCart } from "@/redux/features/cart";
import { RootState } from "@/redux/store";

export const Navbar = () => {
  const handleToggleCart = useDispatch();
  const totalOfItems = useSelector((state: RootState) =>
    calculateAmountOfItems(state.cart.list)
  );
  return (
    <NavbarContainer>
      <div>
        <NavbarLogoMain>MKS</NavbarLogoMain>
        <NavbarLogoSub>Sistemas</NavbarLogoSub>
      </div>
      <button
        onClick={() => handleToggleCart(toggleCart())}
        data-testid="cart-button"
      >
        <Image src={CartIcon} alt="Cart icon" />
        <span>{totalOfItems}</span>
      </button>
    </NavbarContainer>
  );
};
