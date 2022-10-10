import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
