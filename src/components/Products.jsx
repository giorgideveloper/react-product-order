import React from 'react';
import { BsShop } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsRedux } from '../redux/productsRedux';
import { useEffect } from 'react';
import { addProduct } from '../redux/cartRedux';

function Products() {
	const myProducts = useSelector(state => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsRedux());
	}, [dispatch]);

	const addProductToCard = item => {
		dispatch(addProduct({ ...item, qty: 1 }));
	};

	return (
		<>
			<div
				className='card border-0 shadow rounded order-card'
				style={{ minHeight: '608px' }}
			>
				<div className='card-header bg-white'>
					<h3>
						<BsShop style={{ fontSize: '1.5em', color: 'red' }} />
						products
					</h3>
				</div>
				<div
					className='card-container'
					style={{
						borderRadius: '20px',
						maxHeight: '550px',
						overflow: 'auto',
					}}
				>
					<Row className='justify-content-center'>
						{myProducts.map(item => (
							<Col
								key={item.id}
								xs='6'
								md='4'
								lg='3'
								className='mt-1 mb-1 pe-auto'
								style={{ cursor: 'pointer' }}
							>
								<div
									className='card h-100 rounded border-0 shadow product'
									onClick={() => addProductToCard(item)}
								>
									{' '}
									<img src={item.image} alt='card-img' className='w-100' />
									<span className='badge bg-primary rounded-pill shadow position-absolute m-2'>
										{' '}
										$ {item.price}
									</span>
									<div className='card-content px-3 py-2'>
										<h6 className='fw-bold'>
											<small>{item.name}</small>
										</h6>
										<p>
											<small># {item.id}</small>
										</p>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	);
}

export default Products;
