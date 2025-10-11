import React from 'react'
export const revalidate =6; // Rebuild every hour


const SSG = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json()

  return (
    <div>
      <h1>
        SSG -- Static Site Generated User after 6S
      </h1>
      <ul>
        {users.map((u:any) => 
        
        <div key={u.id}>
            <h1>
                NAme of USer: {u.name}
            </h1>
            <h2>Username: {u.username}</h2>
        </div> )}
      </ul>

      <p>Last Updated: {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

export default SSG
