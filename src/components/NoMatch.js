import React from 'react'
import { Link } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <div>
      Page not found
      <Link to='/'>Go back home</Link>
    </div>
  )
}
