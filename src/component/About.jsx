import React from "react";

const About = () => {

  return (
    <>
    <section id="about_us">
      <div className="lg:h-[45vw] h-[72vh] bg-black w-full flex flex-col py-[5vw] lg:py-[5vw] items-center relative lg:gap-[1vw] gap-[2vw]">
        <h1 className="heading opacity-[1] lg:text-[6vw] font-semibold uppercase text-orange-200 text-[12vw]">About US</h1>
        <p className="para lg:w-[90%] w-[80%] h-[20vw] opacity-[.8] text-orange-100 text-center lg:text-[2vw] text-[4.5vw] relative font-sans">
        The Student's Alumni Interaction Cell (SAIC) serves as the bridge between NIT Durgapur and its ever-growing alumni network. We believe in fostering lifelong connections, encouraging knowledge exchange, and creating opportunities for both personal and professional growth. Through a wide range of initiatives, we strive to celebrate the achievements of our alumni, promote mentorship, and ensure their continued involvement with the campus and current students. SAIC is committed to building a strong, engaged, and supportive community that thrives beyond graduation. Our mission is to honor the institute’s legacy while nurturing a vibrant network that inspires future generations of students and alumni.</p>
        
      </div>
    </section>
    
    </>
  );
};

export default About;