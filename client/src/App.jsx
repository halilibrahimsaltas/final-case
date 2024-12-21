import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Listing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
import { useState } from "react";
import MyContext from './context/MyContext';
import SignUp from './Pages/SignUp';
import Dashboard from "./Pages/Dashboard";
import ProductUpload from './Pages/ProductUpload';
import ProductList from './Pages/ProductList';
import CategoryAdd from './Pages/CategoryAdd';
import CategoryList from './Pages/CategoryList';





function App() {

  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const values = {
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin
    
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat/:id" element={<Listing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/product/upload" element={<ProductUpload />} />
           
            <Route path="/category/add" element={<CategoryAdd />} />
            <Route path="/category/list" element={<CategoryList />} />



          </Routes>
        {isHeaderFooterShow===true && <Footer />}
        </MyContext.Provider>
        </BrowserRouter>
    </>
  )
};

export default App;

