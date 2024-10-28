import {useState, useEffect} from 'react'
import axios from 'axios'

const UseApiHook = async (direction,state = null) => {
  try{
    // const response = await fetch(`http://127.0.0.1:8000/${direction}${state}`)
    let url = `http://127.0.0.1:8000/${direction}`
    if(state != null){
      url += state
    }
    
    const response = await fetch(url)


    if(!response.ok){
      throw new Error("There's something wrong")
    }
    
    const data = await response.json()

  }
  catch(err){
    console.error("Fail error:",err)
  }
}

export default UseApiHook