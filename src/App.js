import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Image from './image/logo-11.png';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src={Image} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
            <Nav.Link href="#pricing">Service</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary">Submit</Button>
    </div>
  );
}

export default App;
