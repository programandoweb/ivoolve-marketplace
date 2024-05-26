import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCartState {
  favorites: { [id: number]: boolean }; // Objeto para almacenar los productos favoritos por su ID
  quantities: { [id: number]: number }; // Objeto para almacenar las cantidades de los productos por su ID
}

const initialState: ShoppingCartState = {
  favorites: {},
  quantities: {},
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    updateFavorites(state, action: any) {
      state.favorites = action.payload;
    },
    addToFavorites(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.favorites[id] = true;
    },
    removeFromFavorites(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      delete state.favorites[id];
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const { id, quantity } = action.payload;
      state.quantities[id] = quantity;
    },
    setQuantity(state, action: any) {
      state.quantities = action.payload;
    },
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      delete state.quantities[id];
      delete state.favorites[id];
    },
  },
});

export const { addToFavorites, removeFromFavorites, updateQuantity, updateFavorites, setQuantity, removeProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
