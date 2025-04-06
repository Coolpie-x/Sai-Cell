import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cursor movement
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to("#crsr", {
        left: e.clientX,
        top: e.clientY,
        duration: 0.5,
      });
    });
  }, []);

  // Navbar animation
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#navbar-part2 a,#navbar-part2 span", {
      y: -120,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      delay: 4,
    });
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="absolute z-20 top-0 left-0 h-[30vw] lg:h-[12vw] w-full flex items-center justify-between px-[5vw]">
        {/* SAIC Logo */}
        <div className="lg:h-[4vw] lg:w-[4vw] w-[12vw]">
          <Link to="/"><img src="./saiclogo.png" alt="SAIC Logo" className="object-cover" /></Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div
          id="navbar-part2"
          className="hidden lg:flex gap-[3vw] text-orange-200 lg:text-[1.8vw] font-semibold"
        >
          <a target="_blank" href="https://nitdgp.ac.in/" className="hover:text-white">
            Institute Home
          </a>
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/" className="hover:text-white">
            <span
              onClick={() => scrollToSection("about_us")}
              className="hover:text-white cursor-pointer"
            >
              About
            </span>
          </Link>
          <Link to="/event" className="hover:text-white">Events</Link>
          <Link to="/team" className="hover:text-white">Our Team</Link>
          <Link to="/" className="hover:text-white">
            <span
              onClick={() => scrollToSection("contact")}
              className="hover:text-white cursor-pointer"
            >
              Contact
            </span>
          </Link>
        </div>

      {/* nitdgp Logo */}
      <div className="hidden lg:flex lg:h-[4vw] lg:w-[4vw] w-[14vw]">
  <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">
    <img src="https://nitdgp.ac.in/front/assets/images/logo.png" alt="NIT Durgapur Logo" className="object-cover" />
  </a>
      </div>

        {/* Hamburger (Mobile only) */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border border-white rounded-md shadow-md hover:bg-gray-300"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Hamburger Menu Content */}
      {isMenuOpen && (
        <div className="absolute top-[25vw] right-[5vw] w-[50vw] bg-black text-orange-200 rounded-lg shadow-lg py-[3vw] px-[7vw] z-30 flex flex-col gap-3 lg:hidden text-center">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="border-b-1 py-[1vw]"
          >
            Home
          </Link>
          <Link to="/" className="border-b-1 py-[1vw] ">
            <span
              onClick={() => scrollToSection("about_us")}
            >
              About
            </span></Link>
          <Link
            to="/event"
            onClick={() => setIsMenuOpen(false)}
            className="border-b-1 py-[1vw]"
          >
            Events
          </Link>
          <Link
            to="/team"
            onClick={() => setIsMenuOpen(false)}
            className="border-b-1 py-[1vw]"
          >
            Team
          </Link>
          <Link to="/" className="py-[1vw]">
            <span
              onClick={() => scrollToSection("contact")}
              
            >
              Contact
            </span>
          </Link>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        id="crsr"
        className="hidden lg:flex lg:h-[3.5vw] lg:w-[3.5vw] rounded-full fixed border-2 border-white z-50 pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
};

export default Navbar;
