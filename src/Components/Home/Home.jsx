import React , {useEffect} from 'react'
import './Home.css'
import logo1 from '../../Assets/logo1.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

useEffect(() => {
Aos.init(
    {
      duration: 2000
    }
  )
}, [])

  return (
    <div className='home'>
      <div className="secContainer">
       <div data-aos= 'fade-up' className="homeText">
   
        <span  className="homeSpan">
           Meet Your new car
        </span>
        <h1 className='homeTitle'>
          Honda Civic Type R
        </h1>
        <div className="btns flex">
          <button data-aos= 'fade-right' className ="btn"> More Details</button>
           <button  data-aos= 'fade-left' className="btn primaryBtn">Test Drive</button>
        </div>
      </div>
      <div data-aos= 'fade-down-right' className="homeImage">
      <img src={logo1} alt= "home Image1" className='home'/>
      </div>
    </div>
  </div>
 )
}

export default Home
