import '@fontsource-variable/libre-franklin';
import CheckScroll from './CheckScroll';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import OurCrew from './Components/OurCrew/OurCrew';
import Contact from './Components/Contact/Contact';
import WhatWeDo from './Components/Services/WhatWeDo';
import Management from './Components/Services/Management';
import Deliveries from './Components/Services/Deliveries';
import Instruction from './Components/Services/Instruction';
import MarineSurvey from './Components/Services/MarineSurvey';
import CaptainAndCrewServices from './Components/Services/CaptainAndCrewServices';
import MaritimeRecovery from './Components/Services/MaritimeRecovery';
import '@fontsource-variable/libre-franklin/wght-italic.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <CheckScroll/>
      <Routes className='appRoutes'>

        <Route path='/' element={< Home />} />
        <Route path='/crew' element={< OurCrew />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/whatwedo' element={< WhatWeDo />} />
        <Route path='/management' element={< Management />} />
        <Route path='/deliveries' element={< Deliveries />} />
        <Route path='/instruction' element={< Instruction />} />
        <Route path='/marinesurvey' element={< MarineSurvey />} />
        <Route path='/captainandcrew' element={< CaptainAndCrewServices />} />
        <Route path='/maritimerecovery' element={< MaritimeRecovery />} />
        
      </Routes>
      
      <Footer/>

    </BrowserRouter>
  )
}

export default App
