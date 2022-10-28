import { createSlice } from '@reduxjs/toolkit';
import toast from '../helper/toast';

const cartReduxSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		error: null,
	},

	reducers: {
		addProduct: (state, action) => {
			const filterProduct = state.cart.find(
				item => item.id === action.payload.id
			);
			if (filterProduct) {
				toast('warning', 'already in cart');
			} else {
				state.cart = state.cart.concat(action.payload);
				toast('success', 'Add item');
			}
		},
		increment: (state, action) => {
			state.cart = state.cart.map(item => {
				if (item.id === action.payload) {
					return { ...item, qty: item.qty + 1 };
				}
				return item;
			});
		},
		decrement: (state, action) => {
			state.cart = state.cart.map(item => {
				if (item.id === action.payload) {
					if (item.qty > 1) {
						return { ...item, qty: item.qty - 1 };
					}
					return item;
				}
				return item;
			});
		},

		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cart = state.cart.filter(item => item.id !== itemId);
			toast('success', 'Delete item');
		},
	},
});

// Action creators are generated for each case reducer function

export const { addProduct, increment, decrement, removeItem } =
	cartReduxSlice.actions;
export default cartReduxSlice.reducer;
