import React from 'react'
import Common from '../Component/Common'
import { useState } from 'react'
// import CounterTwo from '../Component/CounterTwo'

function Home() {
  const [count,setCOUNT] = useState(0)
  const increment = () =>{
    setCOUNT(count+1)
  }
  const decrement = ()=>{
    if (count > 0)
    setCOUNT(count - 1)
  }
  return ( 
   <>
   <h1>THIS IS A value:{count}</h1>
   <Common name ={"123456"} />

     {/* <CounterTwo name ={"I'm Developer"} /> */}
     
   <button onClick={increment}>Increment</button>
   <button onClick={() =>decrement()}>Decrement</button>


    </>
  )
}

export default Home