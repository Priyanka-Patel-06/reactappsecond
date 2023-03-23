import React, { useState } from 'react'

function Contact() {

  const[parts ,setParts]= useState()
  const [color, setColor] = useState()
  
  const getInput = (e) => {
    console.log(e.target.value)
    setParts(e.target.value)
}
  return (
    <>
      <input type={'text'} placeholder='Enter Value' onChange={(e)=>getInput(e)} />
       <h1>Input Value : {parts}</h1>

       <input type={'text'} placeholder='Enter color name'  onChange={(e)=>setColor(e.target.value)} />
        <input type={'color'} />
        <h1 style={{color : color}}>This is a color</h1>
        

    </>
  )
}

export default Contact