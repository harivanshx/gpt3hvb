import React from 'react'
import './App.css'
// import Article from './Components/article/Article'
// import Brand from './Components/brand/Brand'
// import Cta from './Components/cta/Cta'
// import Feature from './Components/feature/Feature'
// import Navbar from './Components/navbar/Navbar'

import { Footer, Blog, Possibility, Features ,WhatGPT3,Header } from './Containers'


import {Cta, Brand ,Navbar} from './Components'

const App = () => {
  return (
   <div className='App'>
    <div className='gradient__bg'>
    <Navbar/>
    <Navbar/>
   </div>
   <Brand/>
   <WhatGPT3/>
   <Features/>
   <Possibility/>
   <Cta/>
   <Blog/>
   <Footer/>


   </div>
  )
}

export default App