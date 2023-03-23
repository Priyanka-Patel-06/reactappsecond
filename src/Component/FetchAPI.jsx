import React, { useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom';

function FetchAPI() {
  const[api,setApi]= useState([]);

    const Get = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/2")
               .then(response => response.json())
               .then(json => {
                console.log(json);
                setApi(json);
               });
    };

    useEffect(() => {
      Get();
    }, [])
    
  return (
    <div>My API
        <br/>
        <button onClick={Get}>Fecth API</button>
        <br/>
        <pre>{JSON.stringify(api, null,2)}</pre>
      
    </div>
  )
}

export default FetchAPI