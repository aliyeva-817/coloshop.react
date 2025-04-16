import React from 'react'

const Basket = () => {
    let basket=JSON.parse(localStorage.getItem('basket')) ||[]
  return (
    <div>
        {basket && basket.map( item => {
        return <div className='card'>
          <img src={item.image} alt="" />
          <span>{item.price}</span>
          
        </div>

      })}
    </div>
  )
}

export default Basket