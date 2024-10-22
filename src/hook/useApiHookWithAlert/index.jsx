import {useState, useEffect} from 'react'
import axios from 'axios'
import AlertBar from '../../components/fragments/alertBar'

const useApiHookWithAlertBar = () => {
  const [data,setData] = useState(null)
  const [error,setError]= useState(null)
  const [loading,setLoading] = useState(false)
  const [showAlert,setShowAlert] = useState(false)

  const fetchData = async (direction, state) =>{
    setLoading(true)
    try{
      let url = `http://127.0.0.1:8000/${direction}`
      if(state){
        url += state
      }
      
      const response = await fetch(url)
  
      if(!response.ok){
        throw new Error("There's something wrong")
      }
      
      const result = await response.json()
      setData(result)
      setShowAlert(true)
    }
    catch(err){
      console.error("Fail error:",err)
      setError(err.message)
      setShowAlert(true)
    }
    finally{
      setLoading(false)
    }
  }

  const handleClose = () =>{
    setShowAlert(false)
    setData(null)
    setError(null)
  }
  
  return {data,error,loading, showAlert, handleClose, fetchData}
}

export default useApiHookWithAlertBar