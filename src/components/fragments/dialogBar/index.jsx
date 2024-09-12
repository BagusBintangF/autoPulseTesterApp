import React from 'react'
import { Link } from 'react-router-dom'
import ButtonSmall from '../../elements/button'

const DialogBar = (props) => {
  return (
    <div key={props.contentId} className="relative xl:w-[25rem] w-full xl:h-[15rem] h-[13rem] m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
        <h2 className="font-semibold p-2">{props.title}</h2>
        <p className="p-2 text-justify">{props.content}</p>
        <Link to={props.direction} className="absolute p-2 bottom-5 right-5">
          <ButtonSmall buttonName="Mulai"/>
        </Link>
    </div>
  )
}

export default DialogBar