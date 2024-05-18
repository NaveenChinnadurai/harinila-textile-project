import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import WA from './assets/Icons/whatsapp.png'
import CottonYarn from './pages/productPages/cottonYarn';
import KnittedFabric from './pages/productPages/knittedFabric';
import WovenFabrics from './pages/productPages/wovenFabric';
import Update from './pages/update';
import About from './pages/about';
function App() {

  return (
    <div className='py-3'>
      <Link to="https://wa.me/918098150750" target="_blank" className='position-fixed p-2 z-3  bg-transparent rounded-circle whatsapp-icon'>
        <img src={WA} alt="Whatsapp Icon" className='img-fluid'/>
      </Link>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cottonyarn' element={<CottonYarn/>}/>
        <Route path='/knittedfabric' element={<KnittedFabric/>}/>
        <Route path='/wovenfabric' element={<WovenFabrics/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
        <Route path='/updates' element={<Update/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
