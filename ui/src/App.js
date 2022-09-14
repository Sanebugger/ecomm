import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
            <Route element={<PrivateComponent />} >
                 <Route path='/' element={<ProductList/> } />
                 <Route path='/add' element={<AddProduct/>} />
                 <Route path='/update/:id' element={<UpdateProduct/> } />
                 <Route path='/logout' element={<h1>logout</h1>} />
                 <Route path='/Profile' element={<h1>Profile</h1>} />
            </Route>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;