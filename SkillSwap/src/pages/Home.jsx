import React from 'react'
import Navbar from '../components/navbar.jsx'
import HeroSection from '../components/heroSection.jsx'
import Categories from '../components/Categories.jsx'
import Learn from '../components/Learn.jsx'
import Contact from '../components/contact.jsx'
import Footer from '../components/footer.jsx'

function Home() {
  return (
    <>
    <Navbar />
    <main>
        <HeroSection />
        <Categories />
        <Learn />
        <Contact />
        <Footer />
    </main>
    </>
  )
}

export default Home
