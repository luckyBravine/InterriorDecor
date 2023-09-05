import Navbar from "./components/Navbar";
// import bedthree from  './assets/bedthree.jpg';
// import bedtwo from './assets/bedtwo.png';
// import beduno from './assets/beduno.png';
import hdone from "./assets/hdone.jpg";
import hdtwo from "./assets/hdtwo.jpg";
import hdthree from "./assets/hdthree.jpg";
import {
  BiLeftArrowCircle,
  BiRightArrowCircle,
  BiLoaderCircle,
} from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
// import { content } from "../tailwind.config";

const App = () => {
  const imageSlide = useRef(null);
  const contentSlide = useRef(null);
  // const imageStatus = useRef(null)
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const sliderContent = [
    {
      place: "Kajiado",
      fTitle: "MAASAI",
      lTitle: "RESORT",
      image: hdone,
      number: 1,
      description: `Maasai Resort is more than a destination; it's a sanctuary for the soul, where time stands still, and worries fade away.`,
    },
    {
      place: "Mombasa",
      fTitle: "UTALII",
      lTitle: "RESORT",
      image: hdtwo,
      number: 2,
      description: ` is more than a destination; it's a sanctuary for the soul, where time stands still, and worries fade away.`,
    },
    {
      place: "Kakamega",
      fTitle: "SHINYALU",
      lTitle: "RESORT",
      image: hdthree,
      number: 3,
      description: `Maasai Resort is more than a destination; it's a sanctuary for the soul, where time stands still, and worries fade away.`,
    },
  ];
  useEffect(() => {
    gsap.to(contentSlide.current?.children[0], 0, {
      opacity: 1,
    });
    gsap.to(imageSlide.current?.children[0], 0, {
      backgroundColor: "#E2E8F0",
    });
  }, []);

  const fadeOut = (index, duration) => {
    gsap.to(contentSlide.current?.children[index], duration, {
      opacity: 0,
    });
    gsap.to(imageSlide.current?.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    gsap.to(contentSlide.current?.children[index], duration, {
      opacity: 1,
      delay: 0.5,
    });
    gsap.to(imageSlide.current?.children[index], duration, {
      opacity: 1,
      delay: 0.5,
    });
  };

  const nextSlide = () => {
    if (imageSlide.current?.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[1], 1, {
        opacity: 1,
      });
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageSlide.current?.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      gsap.to(imageSlide.current?.children[1], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[2], 1, {
        opacity: 1,
      });
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageSlide.current?.children[2].classList.contains("active")) {
      setState({ isActive3: false, isActive1: true });
      gsap.to(imageSlide.current?.children[2], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 1,
      });
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    console.log('hello')
    if (imageSlide.current?.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[2], 1, {
        opacity: 1,
      });
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageSlide.current?.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      gsap.to(imageSlide.current?.children[1], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 1,
      });

      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageSlide.current?.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      gsap.to(imageSlide.current?.children[2], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[1], 1, {
        opacity: 1,
      });
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    } 
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <div
        ref={(el) => {
          imageSlide.current = el;
        }}
        className="z-[-1000] object-cover w-full h-full absolute"
      >
        <img
          src={sliderContent[0].image}
          alt=""
          className={`${
            state.isActive1 ? "active" : "opacity-0"
          } w-full h-[100vh] object-fit`}
        />
        <img
          src={sliderContent[1].image}
          alt=""
          className={`${
            state.isActive1 ? "active" : "opacity-0"
          } w-full h-[100vh] object-fit`}
        />
        <img
          src={sliderContent[2].image}
          alt=""
          className={`${
            state.isActive1 ? "active" : "opacity-0"
          } w-full h-[100vh] object-cover`}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center mx-auto w-full">
        <div
          ref={(el) => {
            contentSlide.current = el;
          }}
          className="flex relative justify-center mx-auto mt-[290px] w-[30%] py-6"
        >
          <div className={`${state.isActive1 ? "active" : "opacity-0"} absolute`}>
            <div className="flex  items-center py-6">
              <div className="w-[30px] h-[2px] bg-slate-300 mr-3 relative"></div>
              <span className="text-slate-300 font-poppins text-lg">
                {sliderContent[0].place}
              </span>
            </div>
            <h1 className="text-8xl font-maison-de-artisan text-white">
              {sliderContent[0].fTitle}
            </h1>
            <h1 className="text-8xl font-maison-de-artisan text-white">
              {sliderContent[0].lTitle}
            </h1>
            <p className="text-slate-300 text-sm font-poppins leading-6">
              {sliderContent[0].description}
            </p>
          </div>
          <div className={`${state.isActive2 ? "active" : "opacity-0"} absolute`}>
            <div className="hidden  items-center py-6">
              <div className="w-[30px] h-[2px] bg-slate-300 mr-3 relative"></div>
              <span className="text-slate-300 font-poppins text-lg">
                {sliderContent[1].place}
              </span>
            </div>
            <h1 className="text-8xl font-maison-de-artisan text-white">
              {sliderContent[1].fTitle}
            </h1>
            <h1 className="text-8xl font-maison-de-artisan text-white">
              {sliderContent[1].lTitle}
            </h1>
            <p className="text-slate-300 text-sm font-poppins leading-6">
              {sliderContent[1].description}
            </p>
          </div>
          <div className={`${state.isActive3 ? "active" : "opacity-0"} absolute`}>
            <div className="hidden  items-center py-6">
              <div className="w-[30px] h-[2px] bg-slate-300 mr-3 relative"></div>
              <span className="text-slate-300 font-poppins text-lg">
                {sliderContent[2].place}
              </span>
            </div>
            <h1 className="text-8xl font-maison-de-artisan text-white">
              {sliderContent[2].fTitle}
            </h1>
            <h1 className="text-8xl font-maison-de-artisan text-white">
              {sliderContent[2].lTitle}
            </h1>
            <p className="text-slate-300 text-sm font-poppins leading-6">
              {sliderContent[2].description}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[60%] mt-[235px] py-6">
          <div className={`flex flex-col`}>
            <div className="flex justify-between mx-10 py-2 items-center">
              <div>
                <span className="flex text-slate-200 text-2xl">
                  {sliderContent[0].number}/3
                </span>
              </div>
              <div className="flex">
                <BiLeftArrowCircle
                  className="text-slate-200 text-2xl mr-2"
                  onClick={nextSlide}
                />
                <BiRightArrowCircle
                  className="text-slate-200 text-2xl ml-2"
                  onClick={prevSlide}
                />
              </div>
            </div>
            <div className="w-[88%] h-[2px] bg-slate-300 my-6 relative flex justify-center mx-auto"></div>
            <div
              className="flex justify-evenly text-white"
              ref={(el) => {
                imageSlide.current = el;
              }}
            >
              <div className={` bg-custom-image-one  w-[200px] h-[280px] `}>
                <div className="flex flex-col justify-center mt-10">
                  <div className={`text-center hidden`}>
                    <span className="text-slate-300 text-3xl ">
                      0{sliderContent[0].number}
                    </span>
                    <br />
                    <div className="w-[3px] h-9 bg-slate-300 my-3 relative flex justify-center mx-auto"></div>
                    <h2 className="text-4xl text-slate-300">
                      {sliderContent[0].fTitle}
                    </h2>
                    <h2 className="text-4xl text-slate-300">
                      {sliderContent[0].lTitle}
                    </h2>
                  </div>
                  <div className={`flex mt-[13rem] justify-between mx-2 items-center`}>
                    <div className="flex text-sm items-center">
                      <span>DISCOVER</span>{" "}
                      <BsArrowRight className="text-xl text-white" />
                    </div>
                    <div>
                      <BiLoaderCircle className="flex text-base items-center" />
                    </div>
                  </div>
                </div>
                {" "}
              </div>
              <div className="bg-custom-image-two blur-blur opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:blur-0 w-[200px] h-[280px]">
                <div className="flex flex-col justify-center mt-10">
                  <div className={`text-center`}>
                    <span className="text-slate-300 text-3xl ">
                      0{sliderContent[1].number}
                    </span>
                    <br />
                    <div className="w-[3px] h-9 bg-slate-300 my-3 relative flex justify-center mx-auto"></div>
                    <h2 className="text-4xl text-slate-300 ">
                      {sliderContent[1].fTitle}
                    </h2>
                    <h2 className="text-4xl text-slate-300 ">
                      {sliderContent[1].lTitle}
                    </h2>
                  </div>
                  <div className={`hidden mt-[13rem] justify-between mx-2 items-center`}>
                    <div className="flex text-sm items-center">
                      <span>DISCOVER</span>{" "}
                      <BsArrowRight className="text-xl text-white" />
                    </div>
                    <div>
                      <BiLoaderCircle className="flex text-base items-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-custom-image-three blur-blur opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:blur-0 w-[200px] h-[280px]">
                <div className="flex flex-col justify-center mt-10">
                  <div className={`text-center`}>
                    <span className="text-slate-300 text-3xl ">
                      0{sliderContent[2].number}
                    </span>
                    <br />
                    <div className="w-[3px] h-9 bg-slate-100 my-3 relative flex justify-center mx-auto"></div>
                    <h2 className="text-4xl text-slate-100 ">
                      {sliderContent[2].fTitle}
                    </h2>
                    <h2 className="text-4xl text-slate1000 ">
                      {sliderContent[2].lTitle}
                    </h2>
                  </div>
                  <div className={`hidden mt-[13rem] justify-between mx-2 items-center`}>
                    <div className="flex text-sm items-center">
                      <span>DISCOVER</span>{" "}
                      <BsArrowRight className="text-xl text-white" />
                    </div>
                    <div>
                      <BiLoaderCircle className="flex text-base items-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
