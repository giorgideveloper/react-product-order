import axios from 'axios';

const api = axios.create({
	baseURL: 'https://hplussport.com/api',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default {
	getProducts() {
		return api.get('/products/order/price');
	},
};
