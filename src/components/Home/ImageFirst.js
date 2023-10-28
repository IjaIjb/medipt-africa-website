import React from "react";

const ImageFirst = (props) => {
  const { icon, icon2, text, subText, } = props;
  return (
    <div>
      <div className="">
        {/* desktop start*/}
        <div className="md:block hidden w-full h-full  py-10 ">
          <div className="flex justify-between gap-10 ">
            <div className="w-full">
              <img className="" src={icon} alt="/" />
            </div>

            <div className="w-full flex flex-col text-center md:text-left justify-center   ">
              <h3 className=" md:text-[28px] text-[#FF3E49] font-[700] py-2 ">
                {text}
              </h3>

              <h6 className="text-[#667085] text-[18px] font-[400] max-w-[398px] ">
                {subText}
              </h6>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="md:hidden block">
          <div className="flex text-center my-8 justify-center">
            <div>
              <h3 className="text-[#FF3E49] text-[20px] font-[700] ">
               {text}
              </h3>
              <h6 className="text-[#667085] py-3 text-[14px] font-[400] max-w-[334px] md:max-w-[306px] ">
                {subText}
              </h6>
              <img src={icon2} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFirst;
