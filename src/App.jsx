import React from 'react'
import './App.css'
import Auction from './Components/Auction/Auction'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Trending from './Components/Trending/Trending'
import Sellers from './Components/Sellers/Sellers'
import Review from './Components/Review/Review'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Trending/>
      <Sellers/> 
      <Auction/>
      <Review/> 
      <Footer/>
    

    </div>
  )
}

export default App
