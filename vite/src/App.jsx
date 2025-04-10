import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header/Header'
import Container from './components/container/Container'
import './App.css'
import Shop from './components/shop/Shop'
import Card from './components/card/Card'
import Blog from './components/blog/Blog'
import Section from './components/section/Section'
import Letter from './components/letter/Letter'
import Footer from './components/footer/Footer'
import Box from './components/box/Box'
import Son from './components/son/Son'
import Deal from './components/deal/Deal'





const App = () => {
  const [data, setData] = useState([])

const getData = async () => {
  const res = await axios.get('https://fakestoreapi.com/products')
  setData(res.data)

}

useEffect( () => {
  getData()
}, [])

  return (
    <div>
      <Header/>
      <Shop/>
      <Card/>
      
      <div>
        <div>
          <h1 className='new'>New Arrivals</h1>
          <div className='btns'>
            <button className='btn'>ALL</button>
            <button className='btn'>WOMEN'S</button>
            <button className='btn'>ACCESSORIES</button>
            <button className='btn'>MEN'S</button>
          </div>
          
          </div>
      <div className='cards'>{data && data.map(item =><Container item={item}/>)}</div>
      </div>
      <Deal/> 
      <Box/>
      <Section/>
      <Blog/>
      
     
      <Letter/>
      <Footer/>
      <Son/>
    </div>
  )
}

export default App