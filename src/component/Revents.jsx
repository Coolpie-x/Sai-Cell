import React from "react";

const Revents = () => {
  // const val = [     
  //   { id: 1, title: "Alumination", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 2, title: "Global Alumni meet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 3, title: "Convocation", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 4, title: "StAMP", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 5, title: "B.School Chronicles", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 6, title: "RECpreneur", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 7, title: "Scholars' Tank", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 8, title: "Placemento", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 9, title: "Tech Surfers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  //   { id: 10, title: "Pathbreakers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum a perspiciatis! Eum dicta eos voluptate magnam doloribus praesentium unde." },     
  // ];
  
  const val = [     
    { 
      id: 1, 
      title: "Alumination", 
      description: "Alumination, by SAIC at NIT Durgapur, is a dynamic series of events — Ideathon, LinkedIn Bootcamp, CaseXpert, CV Review, Master’s Talk, and Mock-En-Joy — designed to sharpen skills, unlock career insights, and connect students with inspiring alumni.", 
      img: "./Revents/compressjpeg/theme insta-min.jpg",
    },     
    { 
      id: 2, 
      title: "Global Alumni meet", 
      description: "The Global Alumni Meet, organised annually by SAIC, brings together alumni worldwide for inspiring talks, cultural performances, and discussions on the institute’s growth. It celebrates excellence, honors legacy, and strengthens NIT Durgapur’s enduring spirit and alumni bonds.",
      img: "./Revents/compressjpeg/IMG_6020.JPEG-min.jpg", 
    },     
    { 
      id: 3, 
      title: "Convocation", 
      description: "The Annual Convocation at NIT Durgapur, organised by SAIC, celebrates academic achievements with degree and medal distribution, inspiring speeches, and proud reflections. Marking the end of an academic journey, it’s a heartfelt farewell that bonds students to their alma mater.",
      img: "./Revents/compressjpeg/IMG_6021.JPEG-min.jpg", 
    },     
    { 
      id: 4, 
      title: "StAMP", 
      description: "StAMP is a mentorship initiative by SAIC, NIT Durgapur, designed to connect students with successful alumni. Through personalized guidance and career-focused support, the program helps students unlock their potential, set meaningful goals, and gain valuable insights to excel in their professional journeys.",
      img: "./Revents/compressjpeg/Stamp-min.jpg", 
    },     
    { 
      id: 5, 
      title: "B.School Chronicles", 
      description: "B-School Chronicles, by SAIC at NIT Durgapur, is a podcast series where alumni share their journeys from engineering to top B-schools. With insights on exams, B-school life, and careers, it guides students toward successful management paths.",
       img: "./Revents/compressjpeg/B-school-min.jpg",
    },     
    { 
      id: 6, 
      title: "RECpreneur", 
      description: "RECpreneur, organized by SAIC at NIT Durgapur, is a vibrant entrepreneurial event featuring alumni talks, startup pitches, and interactive sessions. It fosters innovation, inspires students, and strengthens alumni-student connections, nurturing a dynamic entrepreneurial ecosystem on campus.",
      img: "./Revents/compressjpeg/RECpreneur-min.jpg", 
    },     
    { 
      id: 7, 
      title: "Scholars' Tank", 
      description: "Scholars' Tank, an initiative by the Student Alumni Interaction Cell (SAIC) at NIT Durgapur, features alumni sharing their experiences of studying abroad, offering insights on applications, scholarships, and campus life to guide and inspire students toward global education opportunities.",
      img: "./Revents/compressjpeg/ST POSTER-min.jpg", 
    },     
    { 
      id: 8, 
      title: "Placemento", 
      description: "Placemento is a dynamic platform designed to streamline the placement process for students. It bridges the gap between recruiters and candidates, offering tailored opportunities and resources to enhance career success.",
      img: "./Revents/compressjpeg/placmento-min.jpg", 
    },     
    { 
      id: 9, 
      title: "Tech Surfers", 
      description: "Tech Surfers, by SAIC, connects tech professionals with students, offering insights on resumes, coding rounds, and system design. With practical tips and industry secrets, it equips you to navigate the tech world and excel in your career journey.", 
      img: "./Revents/compressjpeg/8th july (2)-min.jpg",

    },     
    { 
      id: 10, 
      title: "Pathbreakers", 
      description: "Pathbreakers, by SAIC at NIT Durgapur, highlights unconventional career paths beyond engineering. Through engaging talks, speakers share experiences across entrepreneurship, entertainment, research, and more, helping students explore diverse opportunities and navigate unique professional journeys with confidence.",
      img: "./Revents/compressjpeg/Pathbreakers-01-min.jpg", 
    },     
  ];
  

  return (
    <div className="lg:py-[15vw] py-[30vw] h-full w-full bg-black flex flex-col items-center justify-center gap-[4vw] lg:gap-[2vw] relative ">
      {val.map((item, index) => (
        <div
          key={index}
          className="relative w-[80%] lg:h-[15vw] h-[100vw] lg:border-2 border-2 border-white rounded-[2vw] lg:p-[2vw] lg:gap-[1vw] gap-[2vw] flex flex-col lg:flex-row  items-center justify-center "
        >
          {item.id % 2 === 0 ? (
            <>
              <div className="lg:w-[20%] border-2 w-[80%]  border-orange-200 h-[30vw] lg:h-full lg:rounded-[1vw] rounded-[2vw]  overflow-hidden">
                <img className="w-full h-full lg:rounded-[1vw] object-cover" src={item.img} alt="" />
              </div>
              <div className="w-[75%] flex flex-col justify-center items-center gap-[.6vw]">
                <h1 className=" text-[5vw] lg:text-[2.4vw] text-orange-300 font-medium uppercase relative">{item.title}</h1>
                <p className="text-[3.5vw] lg:text-[1.3vw] text-white font-medium lg:w-[80%]">{item.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-[75%] flex flex-col justify-center items-center lg:gap-[1vw]">
                <h1 className="text-[5vw] lg:text-[2.4vw] text-orange-300 font-medium uppercase relative">{item.title}</h1>
                <p className="text-[3.5vw] lg:text-[1.3vw] text-white font-medium w-[80%]">{item.description}</p>
              </div>
              <div className="w-[80%] lg:w-[20%] border-2 border-orange-200  h-[35vw] lg:h-full lg:rounded-[1vw] rounded-[2vw] overflow-hidden">
              <img className="w-full h-full rounded-[1vw] object-cover" src={item.img} alt="" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Revents;