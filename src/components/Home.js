import React from 'react'
import Photo1 from './Photos/alex.jpg'
import Photo2 from './Photos/michael.jpg'

export const Home = () => {
  return (
    <>
    <div className='hero'>
      <div className='hero-text'>
        <div className='ball'></div>
        <h1>Meet<br />
        <span className='span-one'>Our</span>
        <br/>
        <span className='span-two'>Users</span>
        </h1>
      </div>
      <div className='hero-img'>
        <div className='circle-one circle'></div>
        <div className='circle-two circle'></div>
        <div className='circle-three circle'></div>
        <div className='circle-four circle'></div>
        <img src={Photo1} />
        <img src={Photo2} />
      </div>
    </div>
    </>
  )
}
