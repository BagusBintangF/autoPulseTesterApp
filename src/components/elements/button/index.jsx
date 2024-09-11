import React from 'react'

const ButtonSmall = (props) => {
  return (
    <button className="rounded-md bg-orange-400 w-24 h-8 text-slate-50 font-semibold drop-shadow-md hover:bg-orange-500 ">{props.buttonName}</button>
  )
}

export default ButtonSmall