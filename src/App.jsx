import 'bootstrap/dist/css/bootstrap.min.css';   //Imported bootstrap CSS file
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import ProductPage from './pages/productPage';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className='py-3'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productPage' element={<ProductPage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
