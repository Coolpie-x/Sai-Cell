import React, { useEffect, useState } from "react";
import About from "./About";
import Events from "./Events";
import Footer from "./Footer";
import Loading from "./Loading";
import { gsap } from "gsap";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animate text after loader is gone
  useEffect(() => {
    if (!loading) {
      let tl=gsap.timeline();
      tl.from(".hero h1", {
        y: 100,
        delay: .8,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      },[])
      .from(".shadow ", {
        y: -100,
        delay: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      },[]);

    }
  }, [loading]);

  return (
    <>
      {/* Loader overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 transition-transform duration-1000 ease-in-out ${
          loading ? "translate-y-0" : "-translate-y-300"
        }`}
      >
        <Loading />
      </div>

      {/* Main section */}

      <section id="home">
        <div className="h-full w-full bg-black w-full flex flex-col items-center relative gap-[1vw] overflow-hidden top-0 left-0">
          <img
            className="relative h-[100vh] lg:h-[48vw] w-full object-cover opacity-[.4]"
            src="./landing.jpg"
            alt=""
          />

          <div className="h-[100vh] lg:h-[45vw] w-full absolute z-10 top-0 left-0 flex flex-col items-center justify-center">
            <div className="hero overflow-hidden">
              <h1 className="text-white w-full lg:text-[6.5vw] text-[11vw] font-bold uppercase text-center lg:leading-[7vw] leading-[11vw]">
                students' alumni
              </h1>
            </div>
            <div className="hero overflow-hidden">
              <h1 className="text-white w-full lg:text-[6vw] text-[10vw] font-bold uppercase text-center  leading-[11vw] lg:leading-[6.5vw]">
                interaction cell
              </h1>
            </div>
          </div>

          <div className="shadow h-[98vh] lg:h-[45vw] w-full absolute z-0 top-0 right-1.5 lg:right-1.5 flex flex-col items-center justify-center ">
            <div className="overflow-hidden">
              <h1 className="text-orange-100 opacity-[.4] w-full text-[11vw] lg:text-[6.5vw] font-bold uppercase text-center lg:leading-[7vw]">
                students' alumni
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-orange-100 opacity-[.4] w-full lg:text-[6vw] text-[10vw]  font-bold uppercase text-center leading-[6vw]">
                interaction cell
              </h1>
            </div>
          </div>

          <video
            className="lg:my-[8vw] my-[10vw] relative lg:h-[45vw] h-[50vh] w-[80%] object-cover lg:rounded-[4vw] rounded-[4vw]"
            src="./saicvideo.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
