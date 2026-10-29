import React from 'react'
import Navbar from '../components/navbar.jsx'
import HeroSection from '../components/heroSection.jsx'
import AiTypes from '../components/aiTypes.jsx'
import AiBenefits from '../components/aiBenefits.jsx'
import Contact from '../components/contact.jsx'
import Footer from '../components/footer.jsx'

function Home() {
  return (
    <>
    <Navbar />
    <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
        <Footer />
    </main>
    </>
  )
}

export default Home
