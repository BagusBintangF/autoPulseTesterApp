import {useState, useEffect} from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const UseApiHook = ({url, method, body = null, headers = null}) => {
  
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const fetchData = () =>{
    axios[method](url, JSON.parse(headers), JSON.parse(body))
        .then((res)=>{
            setResponse(res.data);
        })
        .catch((err)=>{
            setError(err);
        })  
  }

  useEffect(()=>{
    fetchData();
  }, [method,url,body,headers]);

  return (
    {response, error}
  )
}

export default UseApiHook