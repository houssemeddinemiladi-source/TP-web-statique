import React, { useState } from 'react'
const link=[
  {name:'Home',link:'#Home'},
  {name:'Categories',link:'#Categories'},
  {name:'Learn',link:'#Learn'},
  {name:'Contact',link:'#Contact'},
];
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen]=useState(false);
  return (
    <nav className='bg-white text-orange-400 p-4 justify-between backdrop-blur-sm fixed w-full'>
      <div className='app-container flex justify-between items-center'>
        {/* Logo */}
        <span className='text-2xl font-bold gradient-text'>SkillSwap</span>
        {/* desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {link.map((link)=> (
            <a key={link.name} className='nav-item' href={link.href}>
              {link.name}
            </a>
          ))}
          <a href='#' className='nav-btn'>Log In</a>
        </div>
        {/* Mobile menu button */}
        <button onClick={()=>setMobileMenuOpen((prev) => !prev)}
        className='md:hidden p-2 rounded-md text-orange-500 hover:text-orange-600 hover:bg-orange-100 focus:outline-none'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
  
      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1">
          {link.map((link) => (
            <a key={link.name} className='mobile-nav-item' href={link.href}>
              {link.name}
            </a>
          ))}
          <a href="#" className='mobile-nav-btn'>Login</a>
        </div>
      )}

      
    </nav>
  )
}

export default Navbar
