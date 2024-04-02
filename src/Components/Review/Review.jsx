import React, {useEffect} from 'react'
import './Review.css'

import {BsArrowLeftShort}  from 'react-icons/bs'
import {BsArrowRightShort}  from 'react-icons/bs'
import {AiFillStar}  from 'react-icons/ai'

import review1 from '../../Assets/review1.png'
import human1 from '../../Assets/human1.png'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

  useEffect(() => {
    Aos.init(
        {
          duration: 2000
        }
      )
    }, [])

  return (


    <div  className='review section'>
      <div className="secContainer container">
      
         <div data-aos= 'fade-up' className="secHeading flex">
           <h3 className="secTitle">
             Recent Reviews
           </h3>

             <div className="navBtns flex">
              <BsArrowLeftShort className="icon leftIcon"/>
              <BsArrowRightShort className="icon rightIcon"/>
            </div>
            
        
      
        </div>
        <div className="reviewContainer grid">

        {/* Single Review */}

             <div className="singleReview grid " data-aos= 'fade-up'>
              <div className="imgDiv">
               <img src={review1} alt="Car Image" />
            </div>
            <h5 className="ReviewTitle">
              2023 Cadiallac
            </h5>
            <span className="desc">
            BMW’s range-topping SUV takes a different approach to entice you. 
            And it’s not just down to how it looks.

            </span>

            <div className="reviewDiv flex">
             <div className="leftDiv flex">
             <div className="reviewerImage">
              <img src={human1} alt="Reviewer Image" />
              </div>
              <div className="aboutReviewer">
              <span className="name">
                 Jakline Nelson
              </span>
              <p>
              Chief Editor
              </p>
              </div>
            </div> 

            <div className="rightDiv flex">
             <AiFillStar className = 'icon'/>
             <blockquote> 4.84</blockquote>


            </div>


           </div>
          </div>
   

   
        {/* Single Review */}
          <div className="singleReview grid" data-aos= 'fade-up'>
              <div className="imgDiv">
               <img src={review1} alt="Car Image" />
            </div>
            <h5 className="ReviewTitle">
              2023 Cadiallac
            </h5>
            <span className="desc">
            BMW’s range-topping SUV takes a different approach to entice you. 
            And it’s not just down to how it looks.

            </span>

            <div className="reviewDiv flex">
             <div className="leftDiv flex">
             <div className="reviewerImage">
              <img src={human1} alt="Reviewer Image" />
              </div>
              <div className="aboutReviewer">
              <span className="name">
                 Jakline Nelson
              </span>
              <p>
              Chief Editor
              </p>
              </div>
            </div> 

            <div className="rightDiv flex">
             <AiFillStar className = 'icon'/>
             <blockquote> 4.84</blockquote>


            </div>


           </div>
          </div>

         {/* Single Review */}
         <div className="singleReview grid" data-aos= 'fade-up'>
              <div className="imgDiv">
               <img src={review1} alt="Car Image" />
            </div>
            <h5 className="ReviewTitle">
              2023 Cadiallac
            </h5>
            <span className="desc">
            BMW’s range-topping SUV takes a different approach to entice you. 
            And it’s not just down to how it looks.

            </span>

            <div className="reviewDiv flex">
             <div className="leftDiv flex">
             <div className="reviewerImage">
              <img src={human1} alt="Reviewer Image" />
              </div>
              <div className="aboutReviewer">
              <span className="name">
                 Jakline Nelson
              </span>
              <p>
              Chief Editor
              </p>
              </div>
            </div> 

            <div className="rightDiv flex">
             <AiFillStar className = 'icon'/>
             <blockquote> 4.84</blockquote>


            </div>


           </div>
          </div>





        </div> 
      </div>
    </div>     
   

)
    
}

export default Review
