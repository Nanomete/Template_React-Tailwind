import React, { useState } from 'react'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // !false = true
  }

  return (
    <nav className='bg-blue-500 p-4'>
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className='text-white text-2xl font-semibold'>ReactSite</a>

            {/* Toggle Menu */}
            <div className="md:hidden">
              <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
                <svg 
                  fill='none' 
                  stroke='currentColor' 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  stroke-width='3'
                  viewBox='0 0 24 24'
                  className='w-6 h-6'
                >
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>

            <ul className='hidden md:flex space-x-4'>
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white'>About</a></li>
                <li><a href="#" className='text-white'>Services</a></li>
                <li><a href="#" className='text-white'>Contact</a></li>
            </ul>
        </div>
        {/* Mobile Navbar */}
        {isMenuOpen ? (
            <ul className='md:hidden flex-column'>
              <li className='py-3'><a href="#" className='text-white'>Home</a></li>
              <li className='py-3'><a href="#" className='text-white'>About</a></li>
              <li className='py-3'><a href="#" className='text-white'>Services</a></li>
              <li className='py-3'><a href="#" className='text-white'>Contact</a></li>
            </ul>
        ) : null}
    </nav>
  )
}

export default Navbar