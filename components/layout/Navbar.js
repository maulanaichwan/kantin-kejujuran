import Link from 'next/link'
import React, { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import {XIcon} from '@heroicons/react/outline'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* nav */}
      <nav className='navbar'>
          <span className='nav-item'><Link href="/jajanan">
              Jajanan
          </Link></span>
          
          <h1><Link href="/">
              kantin kejujuran
          </Link></h1>

          <span className='nav-item'><Link href="/login" className='nav-item'>
              log in
          </Link></span>
      </nav>

    {/* mobile nav */}
      <nav className='mobile-nav'>
        <div className='top-mobile-menu'>
          <h1>
            <Link href="/">
              kantin kejujuran
            </Link>
          </h1>
          { isMenuOpen ? 
            <XIcon className='menu text-primary' aria-controls='mobile-menu' type='button' onClick={() => setMenuOpen(!isMenuOpen)}/> :
            <MenuIcon className='menu' aria-controls='mobile-menu' type='button' onClick={() => setMenuOpen(!isMenuOpen)}/>
          }
        </div>

        <div className={`pages-links ${isMenuOpen ? 'flex' : 'hidden'}`}>         
          <h4 className="nav-mobile-item">
            <Link href="/jajanan">
                Jajanan
            </Link>
          </h4>

          <h4 className="nav-mobile-item">
            <Link href="/login">
              log in
            </Link>
          </h4>
        </div>
      </nav>
    </>
  )
}

export default Navbar