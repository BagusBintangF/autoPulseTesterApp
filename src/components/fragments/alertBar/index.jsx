import { CloseButton } from '@headlessui/react'
import React from 'react'
import ButtonSmall from '../../elements/button'
import { Link } from 'react-router-dom'

const AlertBar = (props) => {
  return (
    <div className="absolute flex justify-center w-full h-full z-30 ">
        <div className="w-[24rem] h-[12rem] rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5 sticky top-32">
            <h1 className="text-xl font-bold pt-2 pb-2"> {props.title}</h1>
            <span className="flex flex-row">
                <h2 className='text-md font-normal pt-2'>{`${props.message} : `}</h2>
                <h2 className='text-md font-semibold pt-2'>{props.status}</h2>
            </span>
            <span className="absolute p-2 bottom-5 right-5">
                <Link onClick={props.onClose}>
                    <ButtonSmall buttonName="OK" />
                </Link>
            </span>
        </div>
    </div>
  )
}

export default AlertBar