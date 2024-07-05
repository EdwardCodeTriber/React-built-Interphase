import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import View from './View'
import Picture from './Picture'

const Home = () => {
  return (
    
    <div className='Home-container'>
        <Navbar/>
        <div className='home-content'>
          <View/>
          <Picture/>
          
        </div>
        <Footer/>
        
    </div>
  )
}

export default Home