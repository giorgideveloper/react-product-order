import { CiShoppingBasket } from 'react-icons/ci';
import { AiFillDelete } from 'react-icons/ai';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function Cart() {
	const cart = useSelector(state => state.cart.cart);
	const total = cart.map(item => item.price * item.qty);

	const sum = numbers => {
		return numbers.reduce((first, second) => {
			return first + second;
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
					<p className='text-center fw-bold mt-5 fs-3 '>items in cart!</p>
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
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>${item.price}</td>
									<td>{item.qty}</td>
									<td>${(item.price * item.qty).toFixed(2)}</td>
									<td>
										<AiFillDelete />
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
				<div className='card-footer bg-white'>
					<Row>
						<Col md='4' className='my-2'>
							<label htmlFor='tax'> Tax %</label>
							<input
								className='form-control rounded-pill'
								type='number'
								step='.01'
								placeholder='0.00'
							/>
						</Col>
						<Col md='4' className='my-2'>
							<label htmlFor='discount'> Discount $</label>
							<input
								className='form-control rounded-pill'
								type='number'
								step='.01'
								placeholder='0.00'
							/>
						</Col>
						<Col md='4' className='my-2'>
							<label htmlFor='shipping'> shipping</label>
							<input
								className='form-control rounded-pill'
								type='number'
								step='.01'
								placeholder='0.00'
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
