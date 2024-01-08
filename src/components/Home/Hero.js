import React from "react";
const Hero = () => {
  return (
    <div>
      <div className="text-center pt-20 pb-10">
        <div className=" px-5 md:px-0 md:mx-32">
          <div className=" md:mt-[50px]  flex flex-col justify-center items-center">
            {/* <div className="flex md:gap-3 bg-[#FFF1F2] mb-2 rounded-[16px] py-1 pl-1 pr-2">
              <div className="text-[#FF3E49] text-[14px] bg-[#FFFFFF] rounded-[16px] px-[10px] py-[2px] ">
                Private Beta
              </div>
              <div className="flex items-center text-[#FF3E49]">
                <svg
                  className="text-[#FF3E49]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33301 8.00004H12.6663M12.6663 8.00004L7.99967 3.33337M12.6663 8.00004L7.99967 12.6667"
                    stroke="#BA6B99"
                    stroke-width="1.3333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div> */}
            <h2 className="xl:text-[64px] max-w-[800px] mdleading-[70px] md:text-[52px] text-[30px] font-[700]  text-[#042C2D]  pb-5 text-center ">
            AI-powered healthcare all
on your Medical ID.
            </h2>
            <h5 className="text-[#667085] mb-7 md:text-[20px] text-[12px] md:leading-[30px] max-w-[890px] font-[400]  ">
            Whether you're tracking your health progress, communicating with your healthcare provider, or ensuring that your family's health is in good hands, Medipt is tailored to give access to all the healthcare you need to live well all in one place.
            </h5>
            <div className="md:flex hidden gap-8 pb-20 mb-20 ">
              <div className="">
                <button className="px-16 text-[16px] font-[600]  w-full rounded-[8px] py-4 text-white bg-[#0F9F9F]">
                  Book a demo
                </button>
              </div>
              {/* <div>
                <button
                  target="_blank"
                  className="border-[#000000]  w-full px-16 rounded-[8px] py-4 border-[1px] text-[#819B9B] bg-[#F0FFFF] "
              
                >
                  How it works
                </button>
              </div> */}
            </div>

            <div className="md:hidden block w-full pb-20 mb-20 relative gap-y-3">
              <div className="mb-4">
                <button className="px-16 text-[16px] font-[600]  w-full rounded-[8px] py-4 text-white bg-[#0F9F9F]">
                  Book a demo
                </button>
              </div>
              {/* <div>
                <button
                  target="_blank"
                  className="border-[#000000]  w-full px-16 rounded-[8px] py-4 border-[1px] text-[#819B9B] bg-[#F0FFFF] "
              
                >
                  How it works
                </button>
              </div> */}
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
