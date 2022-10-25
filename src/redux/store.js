import { configureStore } from '@reduxjs/toolkit';
import productsReduxReducer from './productsRedux';

export const store = configureStore({
	reducer: {
		products: productsReduxReducer,
	},
});
