import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componants/Navbar'
import Main from './Componants/Main'
import Bestseller from './Componants/bestseller'
import Category from './Componants/Category'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Main/>
      <Bestseller/>
      <Category/>
    </div>
  )
  
}

export default App
