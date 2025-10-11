"use client"

import React, { useState } from 'react'
import { useEffect} from 'react'

// Here we are going to fetch the user data

const UseEffect = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);



  return (
    <div>
        <h1>Users (useEffect)</h1>
        {/* <ul>
            {users.map((u:any) => (
                <li key={u.id}>{u.name}</li>
                <li></li>
            )
            )}
        </ul> */}
      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>

            <div className="mt-3 text-sm">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>

              <div className="mt-2">
                <strong>Address:</strong>
                <ul className="ml-4 list-disc">
                  <li>{user.address.street}, {user.address.suite}</li>
                  <li>{user.address.city} - {user.address.zipcode}</li>
                  <li>Geo: {user.address.geo.lat}, {user.address.geo.lng}</li>
                </ul>
              </div>

              <div className="mt-2">
                <strong>Company:</strong> {user.company.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseEffect
