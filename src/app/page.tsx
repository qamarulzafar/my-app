import React from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import TrustedCompanies from './components/TrustedCompanies'

const page = () => {
  return (
    <div>
      <Hero/>
      <Intro/>
      <Services/>
      <TrustedCompanies/>
    </div>
  )
}

export default page
