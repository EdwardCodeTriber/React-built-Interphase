import React from 'react'


export const Footer = () => {
  return (
    <div className='footer'>
        
        <ul>
            <div className='Social-links'>
              <li><a href=""><i class="ri-google-fill"></i></a></li>
              <li><a href=""><i class="ri-twitter-fill"></i></a></li>
              <li><a href=""><i class="ri-facebook-fill"></i></a></li>
            </div>
            </ul>
            <div className='scroll-product'>
              <button className='left'><i class="ri-arrow-left-line"></i></button>
              <button className='right'><i class="ri-arrow-right-line"></i></button>
            </div>
        
        <div className='card'><a href='#'><button>Add to cart+</button></a></div>

    </div>
    
    
    
  )
}

export default Footer;