import {useState, useEffect} from 'react'
import axios from 'axios'

const UseApiHookWithAlert = async (direction,state) => {
  try{
    let response = await fetch(`http://127.0.0.1:8000/${direction}`)
    if(state != null){
      response = await fetch(`http://127.0.0.1:8000/${direction}${state}`)
    }
    
    if(!response.ok){
      throw new Error("There's something wrong")
    }
    
    const data = await response.json()
    alert(`${data.message}`)
  }
  catch(err){
    console.error("Fail error:",err)
  }
}

export default UseApiHookWithAlert