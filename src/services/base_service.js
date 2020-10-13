


export const baseService=(URL,METHOD,DATA,TOKEN)=>{
   return fetch(URL,{
        method: METHOD,
        }).then(response => response.json()) .then((responseJson)=>{
              return responseJson
        }).catch((error)=>{      
            console.error(error);
        });
     };
    


