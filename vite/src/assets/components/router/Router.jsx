import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from "../../../App";


import Basket from '../pages/Basket'
import Favori from '../pages/Favori';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/basket' element={<Basket />}/>
        <Route path='/favori' element={<Favori />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Router