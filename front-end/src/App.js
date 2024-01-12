// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to include Bootstrap CSS
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<h1>Add Product  Component</h1>} />
          <Route path='/update' element={<h1>Update Product  Component</h1>} />
          <Route path='/logout' element={<h1>Logout  Component</h1>} />
          <Route path='/profile' element={<h1>Profile  Component</h1>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/401"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/402"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
