import React from 'react'
import { Link } from 'react-router-dom'
import Photo3 from './Photos/404-page.jpg'

export const NoMatch = () => {
  return (
    <div className='error'>
      <img alt='' src={Photo3} />
      <p style={{fontSize: '40px', color: '#4f5069'}}>Page not found</p>
      <Link to='/'>Go back home</Link>
    </div>
  )
}
