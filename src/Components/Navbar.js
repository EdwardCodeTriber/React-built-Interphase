import React from "react";

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
        <ul>
         <div className="Option">
            <li><a href="#"> Types</a></li>
            <li><a href="#"> Price</a></li>
            <li><a href="#"> Connect</a></li>
         </div>
         </ul>   
         <ul>
         <div className="Icon">
             <li><a href="#"> <i class="ri-heart-3-fill"></i></a></li>
             <li><a href="#"> <i class="ri-shopping-cart-2-fill"></i></a></li>
            <li><a href="#"> <i class="ri-user-3-fill"></i></a></li>
         </div>
         
        </ul>
    </div>
    </div>
    
  )
}

export default Navbar