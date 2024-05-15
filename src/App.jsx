import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import WA from './assets/Icons/whatsapp.png'
import CottonYarn from './pages/cottonYarn';
import KnittedFabric from './pages/knittedFabric';
import WovenFabrics from './pages/wovenFabric';
import Update from './pages/update';
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
