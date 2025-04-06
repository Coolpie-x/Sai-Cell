import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const committeeMembers = [
  { name: "Convocation 2024", img: "./events/convo 4.jpg" },
  { name: " ", img: "./events/convo 8.jpg" },
  { name: "  ", img: "./events/convo 10.jpg" },
  { name: "Alumination 2025", img: "./events/IMG_5973.jpeg" },
  { name: " ", img: "./events/IMG_5982.jpeg" },
  { name: "Global Alumni Meet 2025", img: "./events/IMG_6007.jpeg"},
  { name: "", img: "./events/IMG_6008.jpeg"},
  { name: "", img: "./events/IMG_6009.jpeg"},

];

const Events = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const eventbox = useRef(null);
  
  useGSAP(() => {

    gsap.to(".marque", {
      y: -300,
      scrollTrigger: {
        trigger:".eventbox",
        start: "top -1%",
        end: "top -120%",
        scrub: 5,
        pin:true,
      },
    });
    gsap.to(box1.current, {
      y: -200,
      scrollTrigger: {
        trigger: eventbox.current,
        start: "top 0%",
        end: "top -120%",
        scrub: 5,
      },
    });

    gsap.to(box2.current, {
      y: 250,
      scrollTrigger: {
        trigger: eventbox.current,
        start: "top top",
        end: "top -100%",
        scrub: 5,
        markers:false,
      },
    });
  }, []);

  return (
    <section id="event">
      <div ref={eventbox} className="eventbox w-full relative bg-black overflow-hidden ">

<div ref={box1} className={`w-full h-[50vh] lg:h-[25.8vw] left-[50%] translate-x-[-50%] bg-black absolute top-0 z-10 overflow-hidden`}>
<h1 className="absolute uppercase text-orange-200 lg:text-[10vw] text-[25vw] font-bold lg:top-[98%] top-[100%]  left-1/2 -translate-x-[50%] -translate-y-[50%] ">
    Events
  </h1>
</div>
<div ref={box2} className=" w-full h-[50.1vh] lg:h-[21.8vw] left-[50%] translate-x-[-50%] bg-black absolute bottom-0 z-10 overflow-hidden "
>
  <h1 className="absolute uppercase text-orange-200 lg:text-[10vw] text-[25vw] font-bold lg:top-[-2%] top:[1%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
    Events
  </h1>
</div>

<div className="marquee bg-black lg:py-[5vw] relative w-full h-screen overflow-hidden left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
  <div className="lg:mt-10 w-full  relative left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
    <div className="flex w-max animate-scroll">
      {[...committeeMembers, ...committeeMembers].map((member, index) => (
        <div
          key={index}
          className="lg:border-3 border-solid border-orange-200 lg:w-[40vw] lg:h-[25vw] h-[40vh] lg:mx-[2vw] mx-[5vw] bg-orange-200 rounded-[3vw] flex-shrink-0 relative"
        >
          <img
            src={member.img}
            alt=""
            className="w-full h-full object-cover rounded-[3vw] overflow-hidden"
          />
          <div className="absolute z-10 top-[103%] left-1/2 -translate-x-[50%] text-white opacity-80 w-full ">
            <h4 className="text-[7vw] lg:text-[2vw] text-center uppercase font-bold w-full">{member.name}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
  <style>
    {`
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
        display: flex;
        width: max-content;
      }
    `}
  </style>
  </div>
  </div>
  </section>
  );
};

export default Events;
