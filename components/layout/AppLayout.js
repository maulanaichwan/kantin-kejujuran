import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const AppLayout = ({ children }) => {
  return (
    <div className='app-layout'>
        <Navbar className="Navbar" />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout