import React from 'react'

const Favori = () => {

    let favori=JSON.parse(localStorage.getItem('favori')) || []
  return (
    <div>
           {favori && favori.map( item => {
        return <div className='card'>
          <img src={item.image} alt="" />
          <span>{item.price}</span>
          
        </div>

      })}
    </div>
  )
}

export default Favori