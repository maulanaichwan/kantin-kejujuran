import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '../../lib/client'; 

const Snack = ({ snack: { image, name, slug, price, _createdAt } }) => {
    const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   } 
    const date = new Date(_createdAt).toLocaleDateString(undefined, optionsDate);
   return (
    <>
        <Link href={`/snack/${slug.current}`}>
            <div className='snack-item-container'>
                <img src={urlFor(image)} className="snack-image"/>
                <div className='snack-details-container'>
                    <h4 className='snack-name'>{name}</h4>
                    <h4 className='snack-price'>{price}</h4>
                    <p className='snack-createdAt'>{date}</p>
                </div>
            </div>
        </Link>
    </>
  )
}

export default Snack