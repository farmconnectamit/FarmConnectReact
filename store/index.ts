import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import { productsApi } from "./product-api";

// Ensure the API is properly integrated with the store
const store = configureStore(
    {
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer,
            cart: cartReducer,
            user: userReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    }
);

export default store;
export type RootState = ReturnType<typeof store.getState>;

export const currentUser = (state: RootState) => state.user.user;
