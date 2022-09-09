import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home  from "./Componentes/Home"
import AboutMe from './Componentes/AboutMe'
import MyWorks from './Componentes/MyWorks'
import Contactme from './Componentes/ContactMe'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={proccess.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/aboutme" element={<AboutMe/>}></Route>
      <Route path='/myworks' element={<MyWorks/>}></Route>
      <Route path='/contactme' element={<Contactme/>}></Route>
    </Routes>
  </BrowserRouter>
)
