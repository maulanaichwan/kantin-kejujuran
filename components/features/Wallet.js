import React from 'react'
import Image from 'next/image'
import { CashIcon, PlusSmIcon } from '@heroicons/react/outline'
import walletIcon from '../../public/wallet-svgrepo-com1.svg';

const Wallet = () => {
  return (
    <div className='wallet-wrapper'>
        <div className='wallet-icons'>
            <Image src={walletIcon} alt="wallet-icons" objectFit='contain' layout='fill'/>
        </div>
        <h2 className='wallet-text'>Rp400.000</h2>
        <PlusSmIcon className='add-icons'/>
        <CashIcon className='cash-out-icons'/> 
    </div>
  )
}

export default Wallet