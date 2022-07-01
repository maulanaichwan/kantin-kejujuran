import React from 'react'
import { client } from '../../lib/client'

const Products = ({productsData}) => {
    console.log(productsData)
    return (
        <div>{productsData}</div>
  )
}

export const getServerSideProps = async() => {
    const query = '*[_type == "snacks"]';
    const productsData = await client.fetch(query);
    console.log(productsData);
    
    return {
        props: {productsData}
    }
}

export default Products