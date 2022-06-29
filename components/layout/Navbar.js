import Link from 'next/link'
import React, { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* nav */}
      <nav className='navbar'>
          <Link href="/jajanan">
              Jajanan
          </Link>
          
          <h1><Link href="/">
              kantin kejujuran
          </Link></h1>

          <Link href="/login">
              log in
          </Link>
      </nav>

    {/* mobile nav */}
      <nav className='mobile-nav'>
        <div className='top-mobile-menu'>
          <h1>
            <Link href="/">
              kantin kejujuran
            </Link>
          </h1>
          <MenuIcon className={`menu ${isMenuOpen ? 'text-primary' : 'text-base'}`}aria-controls='mobile-menu' type='button' onClick={() => setMenuOpen(!isMenuOpen)}/>
        </div>

        <div className={`pages-links ${isMenuOpen ? 'flex' : 'hidden'}`}>         
          <h4 className="item-nav">
            <Link href="/jajanan">
                Jajanan
            </Link>
          </h4>

          <h4 className="item-nav">
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