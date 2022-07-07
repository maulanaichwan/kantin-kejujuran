import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import Wallet from '../components/features/Wallet'
import Snacks from '../components/features/Snacks'
import { client } from '../lib/client'

const jajanan = ({ SnacksData }) => {
  return (
    <AppLayout>
        <Wallet />
        <Snacks data={SnacksData}/>
    </AppLayout>
  )
}

export const getServerSideProps = async() => {
  const query = `*[_type == "snacks"]`;
  const SnacksData = await client.fetch(query);
  return {
    props: { SnacksData }
  }
}

export default jajanan