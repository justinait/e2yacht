import React from 'react'
import Hero from './Hero'
import Services from './Services'
import OurCrew from './OurCrew'
import Where from './Where'
import References from './References'
import './Home.css'

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <OurCrew />
      <Where/>
      <References />
    </div>
  )
}

export default Home