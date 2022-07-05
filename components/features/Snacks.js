import React, { useState } from 'react'
import { SortDescendingIcon, SortAscendingIcon } from '@heroicons/react/outline'
import ListSortOption from '../utils/ListSortOption';
import Snack from './Snack'

const Snacks = ({ data }) => {
    const [sortAsc, setSortAsc] = useState(false);
    const handleClickSortIcons = () => {
        setSortAsc(!sortAsc);
    }
    return (
        <div className='snacksData-container'>
            <span className='sorting-item'>
                {sortAsc ? (
                    <SortAscendingIcon className='sort-icons' onClick={handleClickSortIcons}/>
                ) : (
                    <SortDescendingIcon className='sort-icons' onClick={handleClickSortIcons}/>
                )
            }
                <ListSortOption className=''/>
            </span>
            <div className='snacks-container'>
                {data?.map((snack) => (
                    <Snack snack={snack} key={snack._id}/>
                ))}
            </div>
        </div>
  )
}

export default Snacks