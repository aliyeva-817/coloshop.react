import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import {useNavigate} from 'react-router'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setData(res.data)
    })
  },[])


  const navigate = useNavigate()

  const addToBasket = (item) => {
    let basket=JSON.parse(localStorage.getItem('basket')) ||[]
    let secilenmehsul=basket.find(x => x.id==item.id)

    if(secilenmehsul){
      secilenmehsul.count +=1
    }else{
      basket=[...basket,{...item,count:1}]
    }
    localStorage.setItem('basket',JSON.stringify(basket))
  }


  const addToFavori = (item) => {
    let favori=JSON.parse(localStorage.getItem('favori')) || []
    favori = [...favori, item]
    localStorage.setItem('favori', JSON.stringify(favori))
  }
  return (
    <div className='cards'>
      <div className='btns'>
      <button className='box' onClick={()=> navigate('/basket')}>basket</button>
      <button className='box' onClick={()=> navigate('/favori')}>favori</button>
      </div>
      <div className='cardss'>
      {data && data.map( item => {
        return <div className='card'>
          <img src={item.image} alt="" />
          <span>{item.price}</span>
          <button className='btn' onClick={() => addToBasket(item)}>Sebete ekle</button>
          <button className='btn' onClick={() => addToFavori(item)}>Favorilere ekle</button>
        </div>

      })}
      </div>
    </div>
  )
}

export default App