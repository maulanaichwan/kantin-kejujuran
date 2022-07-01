import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import Wallet from '../components/features/Wallet'
import Products from '../components/features/Products'

const jajanan = () => {
  return (
    <AppLayout>
        <Wallet />
        <Products />
    </AppLayout>
  )
}

export default jajanan