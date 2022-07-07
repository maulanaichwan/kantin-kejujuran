import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const ListSortOptions = ({ sortOption, setSortOption, allSortOptions }) => {
  return (
    <Listbox value={sortOption} onChange={setSortOption}>
      {({ open }) => (
        <div className='listsort-wrapper'>
          <Listbox.Button className="listsort-button">
            <span className='sort-name'>{sortOption.name}</span>
            <span className='listsort-icons-wrapper'><SelectorIcon className='selectorsort-icons'/></span>
          </Listbox.Button>
          <Listbox.Options className="listsort-options">
            {allSortOptions.map((option) => (
              <Listbox.Option 
                key={option.id} 
                value={option}
              >
                {({ selected, active }) => (
                  <div className={`listsort-option ${ active ? 'bg-tertiandry/20 text-white' : 'text-primary'}`
                }>
                    { selected && (
                      <span className={`check-icon-wrapper ${active ? 'text-primary' : 'text-white'}`}>
                        <CheckIcon className='check-icon' />
                      </span>
                    )}
                    <span className={`sort-name ${ selected ? 'font-medium' : 'font-normal'}`}>
                    {option.name}
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  )
}

export default ListSortOptions;