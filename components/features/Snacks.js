import React from 'react'
import { SortDescendingIcon } from '@heroicons/react/outline'
import ListSortOption from '../utils/ListSortOption';

const Products = ({ data }) => {
    console.log(data)
    return (
        <div className='snacksData-container'>
            <span className='sorting-item'>
                <SortDescendingIcon className='descending-icons'/>
                <ListSortOption className=''/>
            </span>
            {data?.map((snack) => (
                <div className='snack-container'>
                    <p>{snack.name}</p>
                    <p>{snack.price}</p>
                </div>
            ))}
        </div>
  )
}

export default Products