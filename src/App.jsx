import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/Header';
import axios from 'axios';
import Footer from './Component/Footer';
import Listing from './Pages/Listing';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/cat/:id" exact={true} element={<Listing />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
