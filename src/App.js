
import './App.css';
import Navbar from './Component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import FetchAPI from './Component/FetchAPI';

function App() {
  return (
  
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/service' element={<Service />}  />
    <Route path='/contact' element={<Contact />} />
   
    </Routes>
    <FetchAPI />
  </>

    
  );
}

export default App;
