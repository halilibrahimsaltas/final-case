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
import { createContext, useState } from "react";
import MyContext from './context/MyContext';


function App() {

  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);

  const values = {
    isHeaderFooterShow,
    setIsHeaderFooterShow,
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
            
          </Routes>
        {isHeaderFooterShow===true && <Footer />}
        </MyContext.Provider>
        </BrowserRouter>
    </>
  )
};

export default App;

