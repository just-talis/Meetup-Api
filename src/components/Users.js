import React, { useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const usersPerPage = 5

  async function getUsers() {
    const data = await fetch('https://randomuser.me/api/?page=1&results=50&seed=abc').then((response) => response.json())
    console.log(data);
  
    setUsers(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getUsers();
  }, [])

if (loading) {
  return <h2 style={{color: '#4f5069', fontSize: '50px'}}>Loading....</h2>
}
  return (
    <>
    <div className='users'>
      {users.slice((page - 1) * usersPerPage, page * usersPerPage).map((user, index) => (
        <div key={index}>
          <img alt={`${user.name.first}`} src={user.picture.thumbnail} />
          <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
          <p>Email : {user.email}</p>
          <p>Gender : {user.gender}</p>
          <p>Cell : {user.cell}</p>
          <p>Location : {user.location.country}, {user.location.city}</p>
        </div>
      ))}
      </div>
      <div className='btn-container'>
      <button onClick={() => setPage((p) => p - 1)}
        disabled={page <= 1}
        style={
          page <= 1
            ? { backgroundColor: "grey", color: "rgba(0,0,0,0.2)", cursor: 'not-allowed'}
            : null
        }
      >
        Prev
      </button>

      {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}

      <button onClick={() => setPage((p) => p + 1)}
        disabled={page >= users.length / usersPerPage}
        style={
         page >= users.length / usersPerPage
            ? { backgroundColor: "gray", color: "rgba(0,0,0,0.2)", cursor: 'not-allowed' }
            : null
        }
      >
        Next
      </button>
      </div>
      <p style={{color: '#4f5069', textAlign: 'center'}}>Page {page} of {users.length/usersPerPage}</p>
    </>
  )

}
