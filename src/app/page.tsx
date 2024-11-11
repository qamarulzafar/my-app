import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import TrustedCompanies from './components/TrustedCompanies'
import CompanyReview from './components/CompanyReview'
import Business from './components/business'
import Footer from './components/Footer'

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
