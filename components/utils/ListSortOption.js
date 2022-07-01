import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

const sortByOption = [
  { id: 1, name: 'Sort by Product Name' },
  { id: 2, name: 'Sort by Created time' },
]

const ListSortOptions = () => {
  const [sortBy, setSortBy] = useState(sortByOption[0])

  return (
    <Listbox value={sortBy} onChange={setSortBy}>
      <Listbox.Button>{sortBy.name}</Listbox.Button>
      <Listbox.Options>
        {sortByOption.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option.name}
            className={({active}) => {
              `sortby-option ${active ? 'bg-base text-primary' : 'text-base'}`
            }}
          >
            {({selected}) => {
               <>
                <span
                  className={`block truncate ${
                    selected ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {option.name}
                </span>
                {selected ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
             </>
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default ListSortOptions;