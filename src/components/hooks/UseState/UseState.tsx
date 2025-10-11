"use client"

import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1> Counter with UseState </h1>
        <p>Count: {count}</p>
        <div>
         <button
            onClick={() => setCount(count  + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded"
         
         >
            +
        </button>   

        <button
            onClick={()=> setCount(count-1)}
            className="px-4 py-2 bg-red-500 text-white rounded"
        >
            -
        </button>
        </div>     
    </div>
  )
}

export default UseState
