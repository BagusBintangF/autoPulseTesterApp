import React, { useState } from 'react'
import {Switch} from '@headlessui/react'
import UseApiHook from '../../../hook/useApiHook'

function ToggleSwitch(props) {
  const [enable, setEnable] = useState(false)
  
  const handleSwitchChange = (newState) =>{
    setEnable(newState);
    let state = newState ? 1 : 0
    UseApiHook(props.direction,state)
  }

  return (
    <Switch
        checked={enable}
        onChange={handleSwitchChange}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-slate-100 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-orange-300">
        
        <span 
            aria-hidden="true"
            className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"  />

    </Switch>
  )
}

export default ToggleSwitch