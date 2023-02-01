import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItemType = {
  name: string;
  price: string;
  photo: string;
  quantity: number;
  id: number;
};

export interface CartState {
  isOpen: boolean;
  list: CartItemType[];
}

const initialState: CartState = {
  isOpen: false,
  list: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const item = action.payload;
      const itemExists = state.list.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.list.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<CartItemType>) => {
      const item = action.payload;
      const itemExists = state.list.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        if (itemExists.quantity === 1) {
          state.list = state.list.filter((cartItem) => cartItem.id !== item.id);
        } else {
          itemExists.quantity -= 1;
        }
      }
    },
    deleteItem: (state, action: PayloadAction<CartItemType>) => {
      const item = action.payload;
      state.list = state.list.filter((cartItem) => cartItem.id !== item.id);
    },
  },
});

export const calculateTotal = (list: CartItemType[]) => {
  return list.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
};

export const calculateAmountOfItems = (list: CartItemType[]) => {
  return list.reduce((acc, item) => acc + item.quantity, 0);
};

export const { toggleCart, addItem, removeItem, deleteItem } =
  CartSlice.actions;

export default CartSlice.reducer;
