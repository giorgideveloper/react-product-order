import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
	return (
		<div className='App'>
			<Container fluid className='pt-3 my-3'>
				<Row>
					<Col sm='12' md='5'>
						<Cart />
					</Col>
					<Col sm='12' md='7'>
						<Products />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
