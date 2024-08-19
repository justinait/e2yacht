import '@fontsource-variable/libre-franklin';
import CheckScroll from './CheckScroll';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <CheckScroll/>
      <Routes className='appRoutes'>

        <Route path='/' element={< Home />} />
        
        {/* <Route path='/about' element={< About />} />
        <Route path='/news' element={< News />} />
        <Route path='/atelier' element={< Atelier />} />
        <Route path='/contact' element={< Contact />} />

        <Route path='/:category' element={< GalleryContainer />} />
        <Route path='/prensa/:id' element={< NewsDetail />} /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
