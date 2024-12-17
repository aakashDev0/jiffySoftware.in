import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import { Link, Element } from 'react-scroll';  
import Contact from "./components/Contact";
import About from "./components/About";
import ProductAndService from "./components/ProductAndService";
import Work from './components/Work';

function App() {

  return (
    <>
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/work' element={<Work />}/>
        <Route path="/product-and-service" element={<ProductAndService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    </>
  )
}

export default App
