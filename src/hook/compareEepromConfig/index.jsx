const CompareEepromConfig = async (id) =>{
    try{
        const data  = await (await fetch(`http://127.0.0.1:8000/compare-eeprom/${id}`)).json()
        if(data != null)
            alert(`${data.boardName} : ${data.message}`)
        else{
            alert('Error')
        }
    } catch(err){
        return(err)
    }
}

export default CompareEepromConfig