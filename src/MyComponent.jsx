import React, {useState} from 'react';
 
 function myComponent(){
   
   const [count, setCount] = useState(0);
 
   const increment = ()=>{
      setCount(c => c + 1)
      setCount(c => c + 1)
   }
   
   const decrement = ()=>{
    setCount(c => c - 1)
  }

  const reset = ()=>{
    setCount(0)
  }
 
   return(
     <div>
       <p>Name: {count}</p>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>reset</button>
       <button onClick={increment}>increment</button>
     </div>
   )
 }
 
 export default myComponent