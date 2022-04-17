import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/services' element={<Services />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/checkout' element={<Checkout />} ></Route>
        <Route path='/blogs' element={<Blogs />} ></Route>
        <Route path='/about' element={<About />} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
