import React, {useState, useEffect} from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useGlobalContext } from '../../../hook/globalContext'

const ComboBoxDefault = ({nameArray}) => {
 const {selectedValue, setSelectedValue, setUseDirection} = useGlobalContext()
 const [query, setQuery] = useState('')
 const filteredName =
    query === '' 
    ? nameArray
    : nameArray.filter((objectName) =>{
        return objectName.name.toLowerCase().includes(query.toLowerCase())
    })
  
    useEffect(() => {
        let array = [selectedValue]
        if(selectedValue != null){
            array.map((values) =>{
                setUseDirection([values.direction])
            })
        }
    }, [selectedValue]);

    // useEffect(() => {
    //     if (selectedName?.direction !== undefined) {
    //       setDirection({ userDirection: selectedName.direction });
    //     }
    //   }, [selectedName, setDirection]);
    
  return (
    <Combobox value={selectedValue} onChange={setSelectedValue} onClose={()=>{''}}>
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