import { configureStore } from '@reduxjs/toolkit';
import productsReduxReducer from './productsRedux';
import cartReduxReducer from './cartRedux';

export const store = configureStore({
	reducer: {
		products: productsReduxReducer,
		cart: cartReduxReducer,
	},
});
