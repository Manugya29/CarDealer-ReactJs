import React, {useEffect} from 'react'
import './Auction.css'


import Aos from 'aos'
import 'aos/dist/aos.css'

import {BsArrowLeftShort}  from 'react-icons/bs'
import {BsArrowRightShort}  from 'react-icons/bs'

import auction1 from '../../Assets/auction1.jpg'
import volvo from '../../Assets/volvo.png'
import nissanGt from '../../Assets/nissanGT.png'
import lamborghini from '../../Assets/lamborghini.png'
import subaru from '../../Assets/auction1.jpg'
import ferrari1 from '../../Assets/auction1.jpg'


const Auction = () => {

     useEffect(() => {
          Aos.init(
              {
                duration: 2000
              }
            )
          }, [])

  return (
     <div  className='auction section'>
      <div className="secContainer container">
         <div data-aos= 'fade-up' className="secHeading flex">
           <h3 className="secTitle">
             Active auction1 
           </h3>
             <div className="navBtns flex">
              <BsArrowLeftShort className="icon leftIcon"/>
              <BsArrowRightShort className="icon rightIcon"/>
            </div>
            </div>
            <div className="carContainer grid">
               
     {/* Single-car-div */}
               <div className="singleCar grid  singleCarActive" data-aos= 'fade-up' > 
                 <div className="imgDiv">

                 <img src={auction1} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              
             </h5>
             <span className="miles">
             LP700-4, garage
             </span>
             <span className="AWD">
             Lamborghini Aventador tuning
             </span>

             <div className= "price_buyBtn flex">
               <span className="price">
                $41,200
               </span>
               <span className="buyBtn">
                Buy Now
               </span>
          </div>
     </div>
  
   {/* Single-car-div */}
   <div className="singleCar grid singleCarActive" data-aos= 'fade-up'>
                 <div className="imgDiv">

                 <img src={volvo} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              
             </h5>
             <span className="miles">
             LP700-4, garage
             </span>
             <span className="AWD">
             Lamborghini Aventador tuning
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


      {/* Single-car-div */}
      <div className="singleCar grid singleCarActive" data-aos= 'fade-up'>
                 <div className="imgDiv">

                 <img src={nissanGt} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              
             </h5>
             <span className="miles">
             LP700-4, garage
             </span>
             <span className="AWD">
             Lamborghini Aventador tuning
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


      {/* Single-car-div */}
      <div className="singleCar grid singleCarActive" data-aos= 'fade-up'>
                 <div className="imgDiv">

                 <img src={lamborghini} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              
             </h5>
             <span className="miles">
             LP700-4, garage
             </span>
             <span className="AWD">
             Lamborghini Aventador tuning
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


      {/* Single-car-div */}
      <div className="singleCar grid singleCarActive" data-aos= 'fade-up'>
                 <div className="imgDiv">

                 <img src={subaru} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              
             </h5>
             <span className="miles">
             LP700-4, garage
             </span>
             <span className="AWD">
             Lamborghini Aventador tuning
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


      {/* Single-car-div */}
      <div className="singleCar grid singleCarActive" data-aos= 'fade-up'>
                 <div className="imgDiv">

                 <img src={ferrari1} alt="Car Image"/>
             </div>
             <h5 className="carTitle">
              
             </h5>
             <span className="miles">
             LP700-4, garage
             </span>
             <span className="AWD">
             Lamborghini Aventador tuning
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

export default Auction
