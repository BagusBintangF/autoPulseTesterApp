const SetEepromConfig = async (id) =>{
    try{
        const data = await (await fetch(`http://127.0.0.1:8000/set-eeprom/${id}`)).json()
        if(data != null)
            alert(`${data.message}`)
        else{
            alert('Error')
        }
    } catch(err){
        return(err)
    }
  }
export default SetEepromConfig

