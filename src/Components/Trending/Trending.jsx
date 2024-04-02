import React, {useEffect} from 'react'
import './Trending.css'


import Aos from 'aos'
import 'aos/dist/aos.css'


import {BsArrowLeftShort}  from 'react-icons/bs'
import {BsArrowRightShort}  from 'react-icons/bs'

import car2 from '../../Assets/car2.png'
import car3 from '../../Assets/car3.png'
import car4 from '../../Assets/car4.png'

const Trending = () => {
  useEffect(() => {
    Aos.init(
        {
          duration: 2000
        }
      )
    }, [])

  return (
  <div  className='trending section'>
      <div className="secContainer container">
         <div data-aos= 'fade-up' className="secHeading flex">
           <h3 className="secTitle">
             Trending Near You
           </h3>
             <div className="navBtns flex">
              <BsArrowLeftShort className="icon leftIcon"/>
              <BsArrowRightShort className="icon rightIcon"/>
            </div>
            </div>

       <div data-aos= 'fade-up' data-aos-duration='2000' className="carContainer grid">
          <div data-aos= 'fade-up' data-aos-duration='2500' className="singleCar grid">
            <div className="imgDiv">
                <img src={car2} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
               Used 2019 Audi S4 premium Plus
             </h5>
             <span className="miles">
               11457 Miles 
             </span>
             <span className="AWD">
              AWD 4-Cylinder Turbo 
             </span>

            <div className= "price_seller flex">
               <span className="price">
                $41,200
               </span>
               <span className="seller">
                best Seller
               </span>
          </div>
     </div>
    {/* Single Line */}
    <div  data-aos= 'fade-up' className="singleCar grid">
      <div className="imgDiv">
        <img src={car3} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              Used 2019 Audi S4 premium Plus
             </h5>
             <span className="miles">
               11457 Miles 
             </span>
             <span className="AWD">
              AWD 4-Cylinder Turbo 
             </span>
              
              <div className= "price_seller flex">
               <span className="price">
                $41,200
               </span>
               <span className="seller">
                best Seller
               </span>
          </div>
     </div>

 {/* Single Line */}
 <div ata-aos= 'fade-up' className="singleCar grid">
                 <div className="imgDiv">

                 <img src={car4} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              Used 2019 Audi S4 premium Plus
             </h5>
             <span className="miles">
               11457 Miles 
             </span>
             <span className="AWD">
              AWD 4-Cylinder Turbo 
             </span>
<div className= "price_seller flex">
               <span className="price">
                $41,200
               </span>
               <span className="seller">
                best Seller
               </span>
          </div>
     </div>
 </div>
  </div>
  </div>
  )
}

export default Trending
