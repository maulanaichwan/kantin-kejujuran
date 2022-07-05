import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const sortByOption = [
  { id: 1, name: 'Sort by Product Name' },
  { id: 2, name: 'Sort by Created time' },
]

const ListSortOptions = () => {
  const [selectedSortby, setSelectedSortby] = useState(sortByOption[0]);
  return (
    <Listbox value={selectedSortby} onChange={setSelectedSortby}>
      {({ open }) => (
        <div className='listsort-wrapper'>
          <Listbox.Button className="listsort-button">
            <span className='sort-name'>{selectedSortby.name}</span>
            <span className='listsort-icons-wrapper'><SelectorIcon className='selectorsort-icons'/></span>
          </Listbox.Button>
          <Listbox.Options className="listsort-options">
            {sortByOption.map((option) => (
              <Listbox.Option 
                key={option.id} 
                value={option}
              >
                {({ selected, active }) => (
                  <div className={`listsort-option ${ active ? 'bg-tertiandry/20 text-white' : 'text-primary'}`
                }>
                    { console.log(selected, active) }
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