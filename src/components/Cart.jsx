import { CiShoppingBasket } from 'react-icons/ci';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart() {
	return (
		<>
			{/* <Table striped bordered hover variant='light'>
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</Table> */}
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
					</Row>
				</div>
			</div>
		</>
	);
}

export default Cart;
