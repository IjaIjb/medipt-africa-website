import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from '../../assets/Frame.svg'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
  return (
    <div className="w-full h-[80px]  z-10  py-7 ">
    <div className=" flex px-5 md:px-20 justify-between items-center w-full h-full">
      <div className="  flex  text-xl md:text-3xl">
        <a href="/">
          <img className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] " src={logo} alt="/" />
        </a>
      </div>
      
      <div>
         <button
            target="_blank"
            className="border-[#0F9F9F]  w-full px-6 md:px-16 rounded-[8px] py-2 md:py-4 border-[1px] text-[#819B9B] bg-[#F0FFFF] "
            // whileHover={{
            //   scale: 1.1,
            //   textShadow: "0px 0px 8px rgb(255,255,255)",
            // }}
          >
           Sign in
          </button>
         </div>
      {/* <div className="md:hidden" onClick={handleClick}>
        {!nav ? (
          <MenuIcon className="w-5 text-[#344054]" />
        ) : (
          <XIcon className="w-5 text-[#344054]" />
        )}
      </div> */}
    </div>
    {/* <ul
      className={!nav ? "hidden" : "absolute z-10 my-8 bg-white w-full px-8"}
    >
      <div className="grid grid-cols-2 pt-4">
      <a href="#health" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Company</a>
        <a href="#product" className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium">Product</a>
       <Link
        className="group inline-flex text-[#819B9B] items-center rounded-md bg-none px-3 py-2 text-base font-medium"
        to='/labs'
        >
         
          Labs
          </Link>
     
      </div>
    
    </ul> */}
  </div>
  )
}

export default Navbar
