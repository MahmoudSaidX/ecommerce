// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface CartItem extends Product {
  quantity: number;
}

interface ProductState {
  products: Product[];
  cart: CartItem[];
}

const initialState: ProductState = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartItemQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const cartItem = state.cart.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateCartItemQuantity,
} = productSlice.actions;

export default productSlice.reducer;
