import { CiShoppingBasket } from 'react-icons/ci';
import {
	AiFillDelete,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from 'react-icons/ai';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { decrement, increment, removeItem } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { useState } from 'react';

function Cart() {
	const dispatch = useDispatch();
	const [tax, setTax] = useState(null);
	const [discount, setDiscount] = useState(null);
	const [shipping, setShipping] = useState(null);
	// Get product
	const cart = useSelector(state => state.cart.cart);
	let total = cart.map(item => item.price * item.qty);
	// Sum price
	const sum = numbers => {
		return numbers.reduce((first, second) => {
			return first + second + tax - discount + shipping;
		}, 0);
	};

	return (
		<>
			<div
				className='card border-0 shadow rounded order-card'
				style={{ minHeight: '608px' }}
			>
				<div className='card-header bg-white'>
					<h3>
						<CiShoppingBasket style={{ fontSize: '1.5em', color: 'red' }} />
						Cart
						<Badge bg='success' className='ms-2 shadow-sm rounded-4'>
							Item {total.length}
						</Badge>
					</h3>
				</div>
				<div
					className='card-container'
					style={{
						minHeight: '350px',
						maxHeight: '350px',
						overflow: 'auto',
					}}
				>
					{total.length === 0 ? (
						<p className='text-center fw-bold mt-5 fs-3 '>No items in cart!</p>
					) : (
						<Table striped bordered hover variant='light'>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Price</th>
									<th>Qty</th>
									<th>Subtotal</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{cart.map(item => (
									<tr key={item.id} className='text-center'>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>${item.price}</td>
										<td className='text-center w-25'>
											<div className='input-group'>
												<button className='btn btn-sm btn-secondary px-1'>
													<AiOutlineMinusCircle
														className='fs-5'
														onClick={() => dispatch(decrement(item.id))}
													/>
												</button>
												<input
													type='number'
													className='form-control py-0 qty-input text-center'
													disabled
													value={item.qty}
												/>
												<button className='btn btn-sm btn-secondary px-1'>
													<AiOutlinePlusCircle
														className='fs-5'
														onClick={() => dispatch(increment(item.id))}
													/>
												</button>
											</div>
										</td>
										<td>${(item.price * item.qty).toFixed(2)}</td>
										<td className='text-center'>
											<button
												className='btn btn-sm btn-danger rounded-2 shadow '
												onClick={() => dispatch(removeItem(item.id))}
											>
												<AiFillDelete
													className='shadow fs-5 text-center'
													style={{ cursor: 'pointer' }}
												/>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					)}
					{/* Cart table */}
					{/* Cart table */}
				</div>
				{/* cart inputs */}
				<div className='card-footer bg-white'>
					<Row className='text-center'>
						<Col md='4' className='my-2'>
							<label htmlFor='tax'> Tax %</label>
							<input
								className='form-control rounded-pill'
								type='number'
								step='.01'
								placeholder='0.00'
								onChange={e =>
									setTax(Number(e.target.value) * 0.6) / 100 + Number(total)
								}
							/>
						</Col>
						<Col md='4' className='my-2'>
							<label htmlFor='discount'> Discount $</label>
							<input
								className='form-control rounded-pill'
								type='number'
								step='.01'
								placeholder='0.00'
								onChange={e =>
									setDiscount(Number(e.target.value) * 0.1) / 100 +
									Number(total)
								}
							/>
						</Col>
						<Col md='4' className='my-2'>
							<label htmlFor='shipping'> shipping</label>
							<input
								className='form-control rounded-pill'
								type='number'
								step='.01'
								placeholder='0.00'
								onChange={e => setShipping(Number(e.target.value))}
							/>
						</Col>
						<h4>Total Price: ${sum(total).toFixed(2)}</h4>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Cart;
