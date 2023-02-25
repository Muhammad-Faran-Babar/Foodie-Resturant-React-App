import React from 'react'
import Category from './components/Category'
import Food from './components/Food'
import HeadlineCards from './components/HeadlineCards'
import Home from './components/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App
