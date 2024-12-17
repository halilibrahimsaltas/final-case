import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/Header';
import axios from 'axios';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
