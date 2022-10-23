import React, { useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  async function getUsers() {
    const data = await fetch('https://randomuser.me/api/?page=3&results=500&seed=abc').then((response) => response.json())
    console.log(data);
  
    setUsers(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getUsers();
  }, [])

if (loading) {
  return <h2>Loading....</h2>
}
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.thumbnail} />
          <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
          <p>Email : {user.email}</p>
          <p>Gender : {user.gender}</p>
          <p>Cell : {user.cell}</p>
          <p>Location : {user.location.country} {user.location.city}</p>
        </div>
      ))}
    </>
  )

}
