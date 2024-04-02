import React,{useEffect} from 'react'
import './Sellers.css'


import Aos from 'aos'
import 'aos/dist/aos.css'


import sellerImage1 from '../../Assets/sellerImage1.png'
import sellerImage2 from '../../Assets/sellerImage2.png'
import sellerImage3 from '../../Assets/sellerImage3.png'
import sellerImage4 from '../../Assets/sellerImage4.png'
const Sellers = () => {
  useEffect(() => {
    Aos.init(
        {
          duration: 2000
        }
      )
    }, [])

  return (
    <div  className='sellers section'>
      <div className="secContainer container">
        <div data-aos= 'fade-up' className="secHeading grid">
           <h3 className="secTitle">
             Explore top sellers in Town
          </h3>
          
     <p> Joseph holds the Guiness world record for being the greatest salesman in the world </p>

      </div>

      <div className="sellersContainer grid">

        <div data-aos= 'fade-up' className="singleSeller flex">

         <div className="imgDiv flex">
         <img src={sellerImage1} alt= "" className='img' />
        </div>

         <span className="info">
        <h4 className="name">
          Toyota
        </h4>
       <p> from $40 k </p>
        </span>  
       </div>
      


       <div data-aos= 'fade-up' className="singleSeller flex">
        <div className="imgDiv flex">
          <img src={sellerImage2} alt= "" className='img' />
            </div>
              <span className="info">
               <h4 className="name">
                    Mercedes Benz
                </h4>
               <p> from $60 k </p>
              </span>  
            </div>
  
       <div data-aos= 'fade-up' className="singleSeller flex">
         <div className="imgDiv flex">
           <img src={sellerImage3} alt= "" className='img' />
        </div>
        <span className="info">
         <h4 className="name">
           Volkswagen
         </h4>
         <p> from $35 k </p>
       </span>  
      </div>
       
      <div data-aos= 'fade-up' className="singleSeller flex">
       <div className="imgDiv flex">
      <img src={sellerImage4} alt= "" className='img' />
     </div>
     <span className="info">
     <h4 className="name">
      Hyundai
     </h4>
     <p> from $23 k </p>
    </span>  
   </div>
          
</div>
  </div>
</div>


  )
}

export default Sellers
