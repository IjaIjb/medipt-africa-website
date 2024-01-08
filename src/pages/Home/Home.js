import React from "react";
import Navbar from "../../components/Header/Navbar";
import Hero from "../../components/Home/Hero";
import ImageFirst from "../../components/Home/ImageFirst";
import man from "../../assets/Picture 1.png";
import man2 from "../../assets/Picture 1.png";
import i from "../../assets/Hero section.png";
import i2 from "../../assets/Hero section.png";
import appoint from "../../assets/Picture 2.png";
import appoint2 from "../../assets/Picture 2.png";
import pres from "../../assets/Picture 3.png";
import pres2 from "../../assets/Picture 3.png";
import secure from "../../assets/picture 4.png";
import secure2 from "../../assets/picture 4.png";
import mob from "../../assets/Picture 5.png";
import mob2 from "../../assets/Picture 5.png";
import report from "../../assets/picture 6.png";
import report2 from "../../assets/picture 6.png";
import woman from "../../assets/Mask group (13353).svg";
import doc from "../../assets/Mask group (1321).svg";
import sm from "../../assets/Group 76.svg";
import micro from "../../assets/image 39.png";
import futa from "../../assets/image 40.png";
import byte from "../../assets/Byte Logo 1.png";
import security from "../../assets/Group 75.svg";
import improve from "../../assets/Group 77.svg";
import icrease from "../../assets/Group 78.svg";
import fullDoc from "../../assets/Group 49.svg";
import mm from "../../assets/Mask grouop (13).svg";
import org from "../../assets/Mask gropup (13).svg";
import ind from "../../assets/Mask group (1390).svg";
import medi from "../../assets/Group 93.png";
import medii from "../../assets/Group 93.svg";
import icon11 from "../../assets/Mask group (1355).svg";
import icon12 from "../../assets/Mask group (1300).svg";
import icon13 from "../../assets/Mask group (1563).svg";
import img1 from "../../assets/image 37.png";
import img2 from "../../assets/image 34.png";
import img3 from "../../assets/image 36.png";
import TextFirst from "../../components/Home/TextFirst";
import {
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";

const Home = () => {
  return (
    <>
      <div className="relative bg-[#F4FFFF] pb-[280px]">
        <Navbar />

        <Hero />
      </div>
      <div className="flex sm:hidden mt-20">
        <img className="absolute mt-14 top-3/4" src={i2} alt="/" />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="md:py-10 h-full px-5 md:px-0 md:mx-32">
            <div className="sm:flex  hidden justify-center">
              <img className=" absolute xl:mt-[160px] md:mt-[120px] px-5 top-3/4 " src={i} alt="/" />
            </div>
            <div className="sm:mt-[396px]  relative flex justify-center text-center ">
              <div>
                <h3 className="text-[#0B4747] md:text-[48px] text-[30px] font-[700]  ">
                  All in your hands
                </h3>
                <div className="flex justify-center text-center max-w-[343px] md:max-w-[823px] py-5">
                  <h5 className="text-[#667085] md:text-[20px] text-[18px] font-[400]  ">
                    With mobile access to patient information, healthcare
                    providers can make decisions and provide care from anywhere,
                    at any time. Medipt helps to enhance the patient
                    experience and provides peace of mind for both patients and
                    providers.
                  </h5>
                </div>
              </div>
            </div>
            <ImageFirst
              icon={man}
              icon2={man2}
              text="Centralized patient record"
              subText="A single, comprehensive patient record that brings together all relevant information"
            />
            <TextFirst
              icon={appoint}
              icon2={appoint2}
              text="Appointment scheduling"
              subText="A flexible and user-friendly scheduling system that allows healthcare you to manage appointments, manage waiting lists, and avoid double bookings."
            />

            <ImageFirst
              icon={pres}
              icon2={pres2}
              text="Prescription management"
              subText="Write and track prescriptions electronically in realtime.eliminate the need for manual prescription pads and reduce the risk of errors."
            />

            <TextFirst
              icon={secure}
              icon2={secure2}
              text="Secure messaging"
              subText="A secure messaging system that enables you to communicate and collaborate on patient care, reducing the need for face-to-face interactions and improving efficiency."
            />
            <ImageFirst
              icon={mob}
              icon2={mob2}
              text="Mobile accessibility"
              subText="Mobile access to patient information, allowing healthcare providers to make decisions and provide care from anywhere, at any time."
            />

            <TextFirst
              icon={report}
              icon2={report2}
              text="Reporting and analytics"
              subText="A suite of tools for generating reports, analyzing data, and tracking performance, providing valuable insights into patient care and facilitating continuous improvement."
            />
          </div>
        </div>
      </div>
      <div className="px-8 pb-20 bg-gradient-to-b from-[#009899]/[12%] to-[#FF3E49]/[3%] ">
        <div className="flex justify-center text-center items-center">
          <h4 className="text-[#0B4747] text-[32px] md:text-[48px] max-w-[291px] md:max-w-[806px] font-[700] py-9">
            Transform Your Experience with a Solution Tailored Just for You
          </h4>
        </div>
        <div className="flex justify-center">
          <img src={woman} />
        </div>
        <div className="flex justify-center text-center my-14">
          <h5 className=" max-w-[973px] text-[20px] md:text-[40px] font-[400] text-[#0B4747] ">
            Backed by{" "}
            <span className="bg-gray-300 px-1 rounded-full">experts</span>,
            powered by{" "}
            <span className="bg-green-100 px-1 rounded-full">humans</span> like
            you. Medipt lets you maintain your{" "}
            <span className="bg-pink-100 px-1 rounded-full">health</span> best
            and gives you absolute{" "}
            <span className="bg-gray-300 px-1 rounded-full">control.</span>
          </h5>
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center text-center text-white text-[16px] bg-[#0F9F9F] rounded-[8px] px-16 py-3">
            Book a demo
          </button>
        </div>
        <div className="flex justify-center items-center gap-8 pt-16">
      <img className="" src={micro} alt="/" />
      <img className="" src={futa} alt="/" />
      <img className="" src={byte} alt="/" />
        
        </div>

      </div>
      <img className="w-full" src={doc} alt="/" />

      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="md:py-[120px] py-6 h-full px-5 md:px-0 md:mx-32">
            <div className="md:flex justify-between gap-5 mb-5">
              <div className="w-full md:mb-0 mb-5 bg-[#FFF3F5] rounded-[12px] px-6 pt-4 pb-12 ">
                <div className="flex justify-end pb-5">
                  <img src={sm} alt="/" />
                </div>
                <h5 className="text-[#0B4747] text-[24px] font-[700]">
                  Better data management
                </h5>
                <div className="flex">
                  <h6 className="max-w-[388px] text-[18px] font-[400] text-[#667085] ">
                    With Medipt, data management becomes easier and more
                    efficient. All patient information is stored in one central
                    location, allowing for easy access and retrieval by
                    authorized healthcare providers.
                  </h6>
                </div>
              </div>

              <div className="w-full bg-[#FFF3F5] rounded-[12px] px-6 pt-4 pb-12 ">
                <div className="flex justify-end pb-5">
                  <img src={security} alt="/" />
                </div>
                <h5 className="text-[#0B4747] text-[24px] font-[700]">
                  Enhanced security
                </h5>
                <div className="flex">
                  <h6 className="max-w-[409px] text-[18px] font-[400] text-[#667085] ">
                    Security and privacy are top priorities in the healthcare
                    industry. With our system, sensitive patient information is
                    protected with robust security measures such as encryption,
                    secure authentication, and multi-factor verification.
                  </h6>
                </div>
              </div>
            </div>

            <div className="md:flex justify-between gap-5">
              <div className="w-full md:mb-0 mb-5 bg-[#FFF3F5] rounded-[12px] px-6 pt-4 pb-20 ">
                <div className="flex justify-end pb-5">
                  <img src={improve} alt="/" />
                </div>
                <h5 className="text-[#0B4747] text-[24px] font-[700]">
                  Improved accessibility
                </h5>
                <div className="flex">
                  <h6 className="max-w-[388px] text-[18px] font-[400] text-[#667085] ">
                    With mobile access to patient information, healthcare
                    providers can make decisions and provide care from anywhere,
                    at any time.
                  </h6>
                </div>
              </div>

              <div className="w-full bg-[#FFF3F5] rounded-[12px] px-6 pt-4 pb-20">
                <div className="flex justify-end pb-5">
                  <img src={icrease} alt="/" />
                </div>
                <h5 className="text-[#0B4747] text-[24px] font-[700]">
                  Increased efficiency
                </h5>
                <div className="flex">
                  <h6 className="max-w-[409px] text-[18px] font-[400] text-[#667085] ">
                    The automation of manual processes and instant access to
                    patient information saves time and reduces errors, allowing
                    healthcare providers to focus on patient care.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-[#0B4747] md:block hidden text-[30px] md:text-[48px] font-[700] text-center ">
              Healthcare for everyone
            </h4>
            <div className="md:flex py-20 hidden ">
            <img src={img1} className='' alt="/" />
            <img src={img2} className='' alt="/" />
            <img src={img3} className='' alt="/" />

            </div>
 <div className="w-full">
 <img src={fullDoc} className='w-full' alt="/" />

 </div>
      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="pt-[120px] pb-[100px] px-5 md:px-0 md:mx-32">
           

           {/* <div className="md:block hidden">
           <ImageFirst
              icon={mm}
              text="1. For Health institutions"
              subText="With Medipt you can streamline processes, increase efficiency, and provide better care for patients - our platform is the ultimate solution for any health institution."
            />
           
            <ImageFirst
              icon={org}
              text="2. For Organizations"
              subText="Our platform offers a range of tools to improve employee health and productivity, including wellness programs, and telemedicine option, helping organizations to create a healthier and more efficient workforce."
            />
            <ImageFirst
              icon={ind}
              text="3. For Individuals"
              subText="Our health tech solutions provide easy access to personal health information, telemedicine options, and personalized health recommendations, giving you the tools you need to live your best life."
            />
            </div>
            <div className="md:hidden block">
          <div className="flex  my-8 justify-center">
            <div>
            <img src={icon11} alt="/" />
              <h3 className="text-[#FF3E49] text-[20px] font-[700] ">
              1. For Health institutions
              </h3>
              <h6 className="text-[#667085] py-3 text-[14px] font-[400] max-w-[334px] md:max-w-[306px] ">
              With Medipt you can streamline processes, increase efficiency, and provide better care for patients - our platform is the ultimate solution for any health institution.
              </h6>
             
            </div>
          </div>

          <div className="flex  my-8 justify-center">
            <div>
            <img src={icon12} alt="/" />
              <h3 className="text-[#FF3E49] text-[20px] font-[700] ">
              2. For Organizations
              </h3>
              <h6 className="text-[#667085] py-3 text-[14px] font-[400] max-w-[334px] md:max-w-[306px] ">
              Our platform offers a range of tools to improve employee health and productivity, including wellness programs, and telemedicine option, helping organizations to create a healthier and more efficient workforce.
              </h6>
             
            </div>
          </div>

          <div className="flex  my-8 justify-center">
            <div>
            <img src={icon13} alt="/" />
              <h3 className="text-[#FF3E49] text-[20px] font-[700] ">
              3. For Individuals
              </h3>
              <h6 className="text-[#667085] py-3 text-[14px] font-[400] max-w-[334px] md:max-w-[306px] ">
              Our health tech solutions provide easy access to personal health information, telemedicine options, and personalized health recommendations, giving you the tools you need to live your best life.
              </h6>

            </div>
          </div>
        </div> */}
            <h4 className=" text-center text-[#0B4747] md:text-[48px] text-[30px] font-[700]  ">
              Experience the Power of Customized Healthcare now!
            </h4>
            {/* <div className="flex justify-center text-center">
              <button className="flex justify-center text-center text-white text-[16px] bg-[#FF3E49] rounded-[8px] px-20 py-6">
                Book a demo
              </button>
            </div> */}
          </div>
          <div className=" px-5 md:px-0 md:mx-32">
            <div className="bg-[#0F9F9F] rounded-t-[50px] md:rounded-t-[100px] md:p-[70px] p-[40px] w-full">
              <div className="md:flex hidden justify-between">
                <div className="w-full">
                  <img src={medi} className="md:block hidden" alt="/" />
                  <img src={medii} className="block md:hidden" alt="/" />
                  <div className="flex my-16 gap-6">
                    <div className="text-white">
                      <GrLinkedinOption className="w-8 h-8" />
                    </div>
                    <div className="text-white">
                      <GrInstagram className="w-8 h-8" />
                    </div>
                    <div className="text-white">
                      <GrTwitter className="w-8 h-8" />
                    </div>
                    <div className="text-white">
                      <GrYoutube className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex gap-5 pb-3 text-[#FFFFFF] text-[16px] font-[600] ">
                    <button>Terms</button>
                    <button>Privacy Policy</button>
                    <button>Partner with us</button>
                  </div>
                  <h6 className="text-[#FFFFFF] text-[16px] ">
                    © 2023 Medipt.
                  </h6>
                </div>
                <div className="w-full">
                  <h4 className="text-white text-[40px] font-[600] ">
                    We’re here to help
                  </h4>
                  <h6 className="text-white text-[18px] font-[400] py-2">
                    If there’s anything you need to know that’s not covered on
                    our website, then please get in touch.
                  </h6>
                  <div className="">
                    <button className=" text-center text-[#FF3E49] text-[16px] bg-white rounded-[8px] px-20 py-4">
                      Get in touch
                    </button>
                  </div>
                </div>
              </div>

              <div className="block md:hidden justify-between">
                <div className="w-full  justify-center text-center mt-12">
                  <h4 className="text-white text-[30px] font-[600] ">
                    We’re here to help
                  </h4>
                  <h6 className="text-white text-[16px] font-[400] py-3">
                    If there’s anything you need to know that’s not covered on
                    our website, then please get in touch.
                  </h6>
                  <div className="flex justify-center">
                    <button className=" text-center text-[#FF3E49] text-[16px] bg-white rounded-[8px] px-10 py-4">
                      Get in touch
                    </button>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-center">
                    <img src={medii} className=" w-[180px] h-[180px]" alt="/" />
                  </div>
                  <div className="flex justify-center mb-8 -mt-10 gap-6">
                    <div className="text-white">
                      <GrLinkedinOption className="w-5 h-5" />
                    </div>
                    <div className="text-white">
                      <GrInstagram className="w-5 h-5" />
                    </div>
                    <div className="text-white">
                      <GrTwitter className="w-5 h-5" />
                    </div>
                    <div className="text-white">
                      <GrYoutube className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-[100px] pb-3 text-[#FFFFFF] text-[16px] font-[600] ">
                    <button>Privacy Policy</button>
                    <button>Terms</button>
                    <button>Partner with us</button>
                  </div>
                  <div className="flex justify-center mb-20">
                    <h6 className="text-[#FFFFFF] text-[16px] ">
                      © 2023 Medipt.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
