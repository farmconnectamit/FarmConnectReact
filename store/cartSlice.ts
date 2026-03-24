import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../src/types/api-response';

export interface CartItemModel {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItemModel[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemModel>) => {
      const existingItem = state.items.find(item => item.product.id === action.payload.product.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload);
    },
    updateCartItem: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        if (quantity === 0) {
          state.items = state.items.filter(item => item.product.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) => 
  state.cart.items.reduce((sum, item) => sum + parseFloat(item.product.price.replace('$', '')) * item.quantity, 0);
