import React, { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const stationName = [
    {
        "id" : 0,
        "name" : "Concentrating Station",
        "direction" : 4,
    },
    {
        "id" : 1,
        "name" : "Cleaning Station",
        "direction" : 5,
    },

]

const ComboBoxDefault = () => {
 const [selectedName, setSelectedName] = useState(stationName[0])
 const [query, setQuery] = useState('')
 const [direction, setDirection] = useState(4)

 const filteredName =
    query === '' 
    ? stationName
    : stationName.filter((objectName) =>{
        return objectName.name.toLowerCase().includes(query.toLowerCase())
    })
  
  return (
    <Combobox value={selectedName} onChange={setSelectedName} onClose={()=>{''}}>
        <div className='relative'>
            <ComboboxInput 
                className="rounded-md"
                aria-label='Asignee'
                displayValue={(objectName)=>objectName?.name} 
                onChange={(event)=>{setQuery(event.target.value)}}
                />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 pb-2.5">
                <ChevronDownIcon className="size-4 fill-slate-400/60 group-date-[hover]:fill-slate-400" />
            </ComboboxButton>
            <ComboboxOptions anchor="bottom" className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/85 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible">
            {/* ,
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0" */}
                {
                    filteredName.map((objectName)=>(
                        <ComboboxOption key={objectName.id} value={objectName} className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-slate-400/10">
                            <CheckIcon className="invisible size-4 fill-slate-400 group-data-[selected]:visible"/>
                            {objectName.name}
                        </ComboboxOption>
                    ))
                }
            </ComboboxOptions>    

        </div>
        
    </Combobox>
        
  )
}

export default ComboBoxDefault