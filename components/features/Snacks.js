import React, { useState } from 'react'
import { SortDescendingIcon, SortAscendingIcon } from '@heroicons/react/outline'
import ListSortOption from '../utils/ListSortOption';
import Snack from './Snack'

const Snacks = ({ data }) => {
    const allSortOptions = [
        { id: 1, name: 'Sort by Product Name', value: 'name' },
        { id: 2, name: 'Sort by Created time', value: '_createdAt' },
        { id: 3, name: 'Sort by Price', value: 'price'}
    ]
    const [sortAsc, setSortAsc] = useState(false);
    const [sortOption, setSortOption] = useState(allSortOptions[0]);
    const handleClickSortIcons = () => {
        setSortAsc(!sortAsc);
    }
    const sortData = (data, sortAsc, sortOptionValue ) => {
        return data?.sort((a,b) => {
            if(sortAsc) {
                if(sortOptionValue === 'name') {
                    let nameA = a[sortOptionValue], nameB = b[sortOptionValue];
                    if(nameA < nameB) {
                        return -1;
                    } else if(nameA > nameB) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else if(sortOptionValue === '_createdAt') {
                    let dateA = a[sortOptionValue], dateB = b[sortOptionValue];
                    return dateA - dateB;
                } else if(sortOptionValue === 'price') {
                    return a[sortOptionValue] - b[sortOptionValue];
                } else {
                    console.log('doesnt have sorting criteria');
                }
            }  
            if(!sortAsc) {
                if(sortOptionValue === 'name') {
                    let nameA = new Date(a[sortOptionValue]), nameB = new Date(b[sortOptionValue]);
                    if(nameA < nameB) {
                        return 1;
                    } else if(nameA > nameB) {
                        return -1;
                    } else {
                        return 0;
                    }
                } else if(sortOptionValue === '_createdAt') {
                    let dateA = a[sortOptionValue], dateB = b[sortOptionValue];
                    return dateB - dateA;
                } else if(sortOptionValue === 'price') {
                    return b[sortOptionValue] - a[sortOptionValue];
                } else {
                    console.log('doesnt have sorting criteria');
                }
            }
        })  
    }

    return (
        <div className='snacksData-container'>
            <span className='sorting-item'>
                {sortAsc ? (
                    <SortAscendingIcon className='sort-icons'onClick={handleClickSortIcons} />
                ) : (
                    <SortDescendingIcon className='sort-icons' onClick={handleClickSortIcons}/>
                )
            }
                <ListSortOption className='' sortOption={sortOption} setSortOption={setSortOption} allSortOptions={allSortOptions} />
            </span>
            <div className='snacks-container'>
                {console.log(sortData(data, sortAsc, sortOption.value))}
            </div>
        </div>
    )
}

export default Snacks