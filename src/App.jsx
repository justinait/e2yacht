import '@fontsource-variable/libre-franklin';
import CheckScroll from './CheckScroll';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import OurCrew from './Components/OurCrew/OurCrew';
import Contact from './Components/Contact/Contact';
import '@fontsource-variable/libre-franklin/wght-italic.css';
import Services from './Components/Services/Services';
import { ServiceProvider } from './Components/context/ServiceContext.jsx';

function App() {

  return (
    <ServiceProvider>
      <BrowserRouter>
        <Navbar />
        <CheckScroll/>
        <Routes className='appRoutes'>

          <Route path='/' element={< Home />} />
          <Route path='/crew' element={< OurCrew />} />
          <Route path='/contact' element={< Contact />} />

          <Route path='/:serviceId' element={< Services />} />
          
        </Routes>
        
        <Footer/>

      </BrowserRouter>
    </ServiceProvider>
  )
}

export default App
