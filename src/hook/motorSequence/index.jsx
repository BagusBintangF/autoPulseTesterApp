import React from 'react'

const MotorSequence = async (direction,id = null) =>{
    try{
        if(direction == "sequence" || direction =="homing"){
            const data = await (await fetch(`http://127.0.0.1:8000/motor-test/${direction}/${id}`)).json()
            if(data != null)
                alert(`${data.message}`)
        }

        else if(direction == "servo"){
            const dataServo = await (await fetch(`http://127.0.0.1:8000/motor-test/${direction}/`)).json()
            if(dataServo != null)
                alert(`${dataServo.message}`)
        }
        else{
            const dataServo = await (await fetch(`http://127.0.0.1:8000/motor-test/${direction}/`)).json()
            if(dataServo != null)
                alert(`${dataServo.message}`)
        }

    } catch(err){
        return(err)
    }
  }
export default MotorSequence
