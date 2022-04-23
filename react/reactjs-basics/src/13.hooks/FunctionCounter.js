import React, {useState} from 'react'

function FunctionCounter() {
    let [count, setCount] = useState(0)

   const addCount =() =>{
        setCount(count+1)
    }
  return (
    <div className="container">
        <h1>Count : {count}</h1>
        <button className="btn btn-primary"
                onClick={() => addCount()}
        >Add Count</button>
    </div>
  )
}

export default FunctionCounter