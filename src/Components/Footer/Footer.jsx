import React, {useEffect} from 'react'
import './Footer.css'


import Aos from 'aos'
import 'aos/dist/aos.css' 

const Footer = () => {
  useEffect(() => {
    Aos.init(
        {
          duration: 2000
        }
      )
    }, []) 

  return (
    <div  className='footer'>
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
            
            {/* Single Grid */}

           <div data-aos= 'fade-up' className="singleGrid">
             <span className="footerTitle">
              aboutReviewer
             </span>
             <ul className="footerUI grid">
               <li className="footerLi">
                   How it works 
               </li>
               <li className="footerLi">
                   Careers
               </li>
               <li className="footerLi">
                Affiliates
               </li>
               <li className="footerLi">
                Media
               </li>
               </ul>
          </div>
          
            {/* Single Grid */}

           <div data-aos= 'fade-up' className="singleGrid">
             <span className="footerTitle">
              Become Seller
             </span>
             <ul className="footerUI grid">
               <li className="footerLi">
                   Add Vehicles
               </li>
               <li className="footerLi">
                   Resource center
               </li>
               <li className="footerLi">
                Bonds
               </li>
               <li className="footerLi">
                Release Dates
               </li>
               </ul>
          </div>

            {/* Single Grid */}

           <div data-aos= 'fade-up' className="singleGrid">
             <span className="footerTitle">
                Community
             </span>
             <ul className="footerUI grid">
               <li className="footerLi">
               Recommmendations 
               </li>
               <li className="footerLi">
                   Gift cards
               </li>
               <li className="footerLi">
                Top Ups
               </li>
               <li className="footerLi">
                Selling
               </li>
               </ul>
          </div>

            {/* Single Grid */}
            <div  data-aos= 'fade-up' className="singleGrid">
             <span className="footerTitle">
              Booking Support 
             </span>
             <ul className="footerUI grid">
               <li className="footerLi">
                   Updates for Covid-19
               </li>
               <li className="footerLi">
                   Help center
               </li>
               <li className="footerLi">
                Garages
               </li>
               <li className="footerLi">
                Trust & Safety
               </li>
               </ul>
          </div>


           </div>

     {/* Footer LowerSection */}

     <div data-aos= 'fade-up' className='lowerSection grid'>
      <p> 2023 All  rights reserved</p>
       <blockquote> Manugya Dastidar</blockquote>
     </div>
     </div>
     </div>  
  )
}

export default Footer
