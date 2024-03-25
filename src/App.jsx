import 'bootstrap/dist/css/bootstrap.min.css';   //Imported bootstrap CSS file
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
function App() {

  return (
   <>
   <Navbar/>
   <Home/>
   <Footer/>
   </>
  )
}

export default App
