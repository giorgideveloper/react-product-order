import { createSlice } from '@reduxjs/toolkit';

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
				state.cart = state.cart.map(item => {
					if (item.id === action.payload.id) {
						return { ...item, qty: (item.qty += 1) };
					}
					return item;
				});
			} else {
				state.cart = state.cart.concat(action.payload);
			}
		},
	},
});

// Action creators are generated for each case reducer function

export const { addProduct } = cartReduxSlice.actions;
export default cartReduxSlice.reducer;
