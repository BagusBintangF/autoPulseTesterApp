import React, { useState } from 'react'

const directionIdentifier = () => {
 const [useDirection, setUseDirection] = useState()

 const setDirection = (userDirection) =>{
    setUseDirection(userDirection)
 }
  return {useDirection, setDirection}
}

export default directionIdentifier