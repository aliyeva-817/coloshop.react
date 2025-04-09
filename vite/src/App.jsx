import React, { useState } from 'react'
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





const App = () => {
  const [data, setData] = useState([])

  const getData =() =>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=> setData(res.data))
  }
  return (
    <div>
      <Header/>
      <Shop/>
      <Card/>
      <button onClick={() => getData()}>SHOW</button>
      <div>
        <div><h1 className='new'>New Arrivals</h1></div>
      <div className='cards'>{data && data.map(item =><Container item={item}/>)}</div>
      </div>
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