"use client"

import React,{useState, useEffect} from 'react'
import { json } from 'stream/consumers';

const CSR = () => {

    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));

    }, [])

  return (
    <div>
      <h1>
        CSR - Client side rendering .
      </h1>
      {
        users.length === 0 ? (
            <p>Loading ......</p>

        ):(
            <ul> {users.map((u:any) => 

                <li key={u.id}>{u.name}</li>

            )}

            </ul>
        )
      }
    </div>
  )
}

export default CSR
