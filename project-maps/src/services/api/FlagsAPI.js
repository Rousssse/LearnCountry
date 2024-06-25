const getNameCountryAndFlags = async function() {
    const apiUrl = "https://restcountries.com/v3.1/all";
    const response = await fetch(`${apiUrl}`); 
    if(response.status == 200){
      return response.json()    
    }else{
      new Error(response.statusText)
    }
  }

  export { getNameCountryAndFlags }

