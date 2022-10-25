import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../service/ApiService';

export const productsReduxSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		status: 'idle',
		error: null,
	},
	extraReducers(builder) {
		// trending movies
		builder
			.addCase(getProductsRedux.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(getProductsRedux.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.products = action.payload;
			})
			.addCase(getProductsRedux.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
	},
});

// Action creators are generated for each case reducer function
export const getProductsRedux = createAsyncThunk(
	'products/getProductsRedux',
	async () => {
		const response = await ApiService.getProducts();
		return response.data;
	}
);

export default productsReduxSlice.reducer;
