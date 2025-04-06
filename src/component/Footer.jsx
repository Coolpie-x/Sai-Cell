import React from "react";

const Footer = () => {

  return (
    <section id="contact">
      
      <footer className="lg:h-[25vw] w-full flex flex-col lg:flex-row lg:justify-around items-center justify-center lg:border-b-4 border-white relative bg-gradient-to-r from-black to-black text-white lg:py-[6vw] lg:px-[4vw] py-[0vw] px-[5vw]">
        <img className="h-[35vw] w-[30vw]  lg:h-[8vw] lg:w-auto lg:my-[1vw] "
          src="./saiclogo.png"
          alt=""/>
        <div className=" h-full w-auto py-[8vw] lg:py-[0vw]">
          <div className="w-full lg:h-[55%] border-b-2 border-white flex justify-center items-center">
            <h4 className="text-[3.5vw] lg:text-[1vw] font-medium mb-[5vw] lg:mb-[2vw] lg:mb-[2vw] text-center">
              <span className="text-[7vw] lg:text-[1.5vw] uppercase ">Address</span>
              <br />
              National Institute of Technology Durgapur<br />
              राष्ट्रीय प्रौद्योगिकी संस्थान दुर्गापुर<br />
              (An Institute of National Importance under Government of India, Ministry of Human Resource Development)
              <br />
              Mahatma Gandhi Avenue, Durgapur 713209, West Bengal, INDIA
            </h4>
          </div>
          <div className="w-full lg:h-[60%] flex flex-col justify-center items-center gap-5 lg:gap-[10%] py-[2vw] lg:py-[0vw]">
            <h3 className="text-[12vw] lg:text-[2.3vw] font-medium flex gap-10 lg:gap-4">
            <a href="https://www.instagram.com/saicell_nitdgp?igsh=dWN3dGxtc2Vza3Y2" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line text-pink-400"></i>
              </a>
              
              <a href="https://www.facebook.com/share/12HT955fwis/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-box-fill text-blue-400"></i>
              </a>
              <a href="https://youtube.com/@saicellnitdurgapur5366?si=d7Rc1qQDHvHlUld-" target="_blank" rel="noopener noreferrer">
                <i className="ri-youtube-fill text-red-500"></i>
              </a>
              <a href="https://www.linkedin.com/company/saicell-nitdgp/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill text-blue-800"></i>
              </a>  </h3>
            <h4 className="text-[5vw] lg:text-[1.5vw] font-medium text-center">©️ All content Copyright</h4>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
