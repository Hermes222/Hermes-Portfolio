import React from 'react'
import {Footer, Blog, Possibility,Features,WhatHermes,Header} from './containers/input';
import {CTA,Brand,Navbar} from './components/index';
import './app.css'
const App = () =>{
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
        
      </div>
      <Brand/>
      <WhatHermes/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
export default App