import React from 'react'

export const FallBack = ({error}) => {
  return (
    <div>
        Oop, something went wrong...
        <p style={{ color: 'red'}}>{error.message}</p>
    </div>
  )
}
