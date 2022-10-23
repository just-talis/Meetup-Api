import React, { useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState([])

  async function getUsers() {
    const data = await fetch('https://randomuser.me/api/?results=500').then((response) => response.json())
    setUsers(data.results)
  }

  useEffect(() => {
    getUsers();
  }, [])


  return (
    <>
      {users.map(user => (
        <div>
          <img src={user.picture.thumbnail} />
          <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
          <p>Email : {user.email}</p>
          <p>Gender : {user.gender}</p>
          <p>Cell : {user.cell}</p>
        </div>
      ))}
    </>
  )

}
