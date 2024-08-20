import '@fontsource-variable/libre-franklin';
import CheckScroll from './CheckScroll';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <CheckScroll/>
      <Routes className='appRoutes'>

        <Route path='/' element={< Home />} />
        
      </Routes>
      
      <Footer/>

    </BrowserRouter>
  )
}

export default App
