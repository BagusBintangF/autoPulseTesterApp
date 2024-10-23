import React from 'react'
import DialogBar from '../dialogBar';

const GantryPage = (props) => {
    const gantryDialogContent=[
        {
            id:1,
            title:"Testing Motor",
            content:"Page untuk test motor pada gantry board",
            direction : "motor-test"
        },
        {
            id:2,
            title:"Testing Input/Output",
            content:"Page untuk test input output pada gantry board",
            direction : "io-test"

        },
    ];

    return (
    <>
        <nav className="static z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 right-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Gantry Testing Page</h5>
        </nav>
        {
            gantryDialogContent.map(function (contentDialog){
                return(
                    <DialogBar key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} direction={contentDialog.direction}/>    
                )
            })
            
        }

    </>
  )
}

export default GantryPage