import Navbar from "./components/Navbar";
import luxuryBedroom from './assets/luxuryBedroom.avif';
import bedy from './assets/bedy.avif';
import photo from './assets/photo.avif';
import {
  BiLeftArrowCircle,
  BiRightArrowCircle,
  BiLoaderCircle,
} from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";


const App = () => {
  const imageSlide = useRef(null);
  const contentSlide = useRef(null);
  const imageStatus = useRef(null);
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
      image: bedy,
      number: 1,
      description: `Maasai Resort is more than a destination; it's a sanctuary for the soul, where time stands still, and worries fade away.`,
    },
    {
      place: "Mombasa",
      fTitle: "UTALII",
      lTitle: "RESORT",
      image: luxuryBedroom,
      number: 2,
      description: ` is more than a destination; it's a sanctuary for the soul, where time stands still, and worries fade away.`,
    },
    {
      place: "Kakamega",
      fTitle: "SHINYALU",
      lTitle: "RESORT",
      image: photo,
      number: 3,
      description: `Maasai Resort is more than a destination; it's a sanctuary for the soul, where time stands still, and worries fade away.`,
    },
  ];
  useEffect(() => {
    gsap.to(contentSlide.current?.children[0], 0, {
      opacity: 1,
    });
    gsap.to(imageSlide.current?.children[0], 0, {
      opacity: 1,
    });
    gsap.to(imageStatus.current?.children[0], 0, {
      opacity: 1,
    });
  }, []);


  const fadeOut = (index, duration) => {
    gsap.to(contentSlide.current?.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    gsap.to(contentSlide.current?.children[index], duration, {
      opacity: 1,
      delay: 0.1,
    });
  };

  const nextSlide = () => {
    console.log("hello 9");
    if (imageSlide.current?.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[1], 1, {
        opacity: 1,
        scale: 1.2,
        Power3: gsap.easeOut
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
        scale: 1.2,
        Power3: gsap.easeOut
      });
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageSlide.current?.children[2].classList.contains("active")) {
      setState({ isActive3: false, isActive1: true });
      gsap.to(imageSlide.current?.children[2], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 1,
        scale: 1.2,
        Power3: gsap.easeOut
      });
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    console.log("hello");
    if (imageSlide.current?.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      gsap.to(imageSlide.current?.children[0], 1, {
        opacity: 0,
      });
      gsap.to(imageSlide.current?.children[2], 1, {
        opacity: 1,
        scale: 1.2,
        Power3: gsap.easeIn
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
        scale: 1.2,
        Power3: gsap.easeIn
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
        scale: 1.2,
        Power3: gsap.easeIn
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
        className="z-[-1000] object-cover w-full h-full flex-col absolute bg-slate-400"
      >
        <img
          src={sliderContent[0].image}
          alt=""
          className={`${
            state.isActive1 ? "active" : "hidden"
          } w-full h-full object-fit `}
        />
        <img
          src={sliderContent[1].image}
          alt=""
          className={`${
            state.isActive2 ? "active" : "hidden"
          } w-full h-full object-fit`}
        />
        <img
          src={sliderContent[2].image}
          alt=""
          className={`${
            state.isActive3 ? "active" : "hidden"
          } w-full h-full object-cover`}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center mx-auto w-full">
        <div
          ref={(el) => {
            contentSlide.current = el;
          }}
          className="flex relative justify-center mx-auto mt-[100px] md:mt-[290px] w-[70%] md:w-[30%] py-3 md:py-6"
        >
          <div
            className={`${state.isActive1 ? "active" : "opacity-0"} absolute`}
          >
            <div className="flex  items-center py-3 md:py-6">
              <div className="w-[15px] md:w-[30px] h-[2px] bg-slate-300 mr-1 md:mr-3 relative"></div>
              <span className="text-slate-300 font-poppins text-sm md:text-lg">
                {sliderContent[0].place}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-maison-de-artisan text-white">
              {sliderContent[0].fTitle}
            </h1>
            <h1 className="text-5xl md:text-8xl font-maison-de-artisan text-white">
              {sliderContent[0].lTitle}
            </h1>
            <p className="text-slate-300 text-sm font-poppins leading-4 md:leading-6">
              {sliderContent[0].description}
            </p>
          </div>
          <div
            className={`${state.isActive2 ? "active" : "opacity-0"} absolute`}
          >
            <div className="flex items-center py-3 md:py-6">
              <div className="w-[15px] md:w-[30px] h-[2px] bg-slate-300 mr-1 md:mr-3 relative"></div>
              <span className="text-slate-300 font-poppins text-sm md:text-lg">
                {sliderContent[1].place}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-maison-de-artisan text-white">
              {sliderContent[1].fTitle}
            </h1>
            <h1 className="text-5xl md:text-8xl font-maison-de-artisan text-white">
              {sliderContent[1].lTitle}
            </h1>
            <p className="text-slate-300 text-sm font-poppins leading-4 md:leading-6">
              {sliderContent[1].description}
            </p>
          </div>
          <div
            className={`${state.isActive3 ? "active" : "opacity-0"} absolute`}
          >
            <div className="flex items-center py-3 md:py-6">
              <div className="w-[15px] md:w-[30px] h-[2px] bg-slate-300 mr-1 md:mr-3 relative"></div>
              <span className="text-slate-300 font-poppins text-sm md:text-lg">
                {sliderContent[2].place}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-maison-de-artisan text-white">
              {sliderContent[2].fTitle}
            </h1>
            <h1 className="text-5xl md:text-8xl font-maison-de-artisan text-white">
              {sliderContent[2].lTitle}
            </h1>
            <p className="text-slate-300 text-sm font-poppins leading-4 md:leading-6">
              {sliderContent[2].description}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[60%] mt-[235px] py-2 md:py-6">
          <div className={`flex flex-col`}>
            <div className="flex justify-between mx-10 py-2 items-center">
              <div ref={(el) => {
                imageStatus.current = el;
              }}>
                <span className="flex text-slate-200 text-2xl">
                  0{state.isActive1 ? (sliderContent[0].number) : "" || state.isActive2 ? (sliderContent[1].number) : "" || state.isActive3 ? (sliderContent[2].number) : "" }/03
                </span>
              </div>
              <div className="flex z-0">
                <BiLeftArrowCircle
                  className="text-slate-200 text-2xl mr-2"
                  onClick={prevSlide}
                />
                <BiRightArrowCircle
                  className="text-slate-200 text-2xl ml-2"
                  onClick={nextSlide}
                />
              </div>
            </div>
            <div className="w-[88%] h-[2px] bg-slate-300 my-6 relative flex justify-center mx-auto"></div>
            <div
              className="flex justify-evenly text-white"
              ref={(el) => {
                imageStatus.current = el;
              }}
            >
              <div
                className={`${
                  state.isActive1 ? "blur-0" : "blur-blur"
                } bg-custom-image-one w-[100px] h-[180px] md:w-[200px] md:h-[280px] opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:blur-0 `}
              >
                <div className="flex flex-col justify-center mt-10">
                  <div
                    className={`${
                      state.isActive1 ? "hidden" : "block"
                    } text-center`}
                  >
                    <span className="text-slate-300 text-xl md:text-3xl ">
                      0{sliderContent[0].number}
                    </span>
                    <br />
                    <div className="w-[3px] h-4 md:h-9 bg-slate-300 my-3 relative flex justify-center mx-auto"></div>
                    <h2 className="text-xl md:text-4xl text-slate-300">
                      {sliderContent[0].fTitle}
                    </h2>
                    <h2 className="text-xl md:text-4xl text-slate-300">
                      {sliderContent[0].lTitle}
                    </h2>
                  </div>
                  <div
                    className={`${
                      state.isActive1 ? "flex" : "hidden"
                    } mt-[6rem] md:mt-[13rem] justify-between mx-2 items-center`}
                  >
                    <div className="flex text-xs md:text-sm items-center">
                      <span>DISCOVER</span>{" "}
                      <BsArrowRight className="text-xl text-white" />
                    </div>
                    <div>
                      <BiLoaderCircle className="flex text-sm md:text-base items-center" />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div
                className={`${
                  state.isActive2 ? "blur-0" : "blur-blur"
                } bg-custom-image-two opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:blur-0 w-[100px] h-[180px] md:w-[200px] md:h-[280px]`}
              >
                <div className="flex flex-col justify-center mt-10">
                  <div
                    className={`${
                      state.isActive2 ? "hidden" : "block"
                    } text-center`}
                  >
                    <span className="text-slate-300 text-xl md:text-3xl ">
                      0{sliderContent[1].number}
                    </span>
                    <br />
                    <div className="w-[3px] h-4 md:h-9 bg-slate-300 my-3 relative flex justify-center mx-auto"></div>
                    <h2 className="text-xl md:text-4xl text-slate-300 ">
                      {sliderContent[1].fTitle}
                    </h2>
                    <h2 className="text-xl md:text-4xl text-slate-300 ">
                      {sliderContent[1].lTitle}
                    </h2>
                  </div>
                  <div
                    className={`${
                      state.isActive2 ? "flex" : "hidden"
                    } mt-[6rem] md:mt-[13rem] justify-between mx-2 items-center`}
                  >
                    <div className="flex text-xs md:text-sm items-center">
                      <span>DISCOVER</span>{" "}
                      <BsArrowRight className="text-xl text-white" />
                    </div>
                    <div>
                      <BiLoaderCircle className="flex text-sm md:text-base items-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  state.isActive3 ? "blur-0" : "blur-blur"
                } bg-custom-image-three opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:blur-0 w-[100px] h-[180px] md:w-[200px] md:h-[280px] `}
              >
                <div className="flex flex-col justify-center mt-5 md:mt-10">
                  <div
                    className={`${
                      state.isActive3 ? "hidden" : "block"
                    } text-center`}
                  >
                    <span className="text-slate-300 text-xl md:text-3xl ">
                      0{sliderContent[2].number}
                    </span>
                    <br />
                    <div className="w-[3px] h-4 md:h-9 bg-slate-100 my-3 relative flex justify-center mx-auto"></div>
                    <h2 className="text-xl md:text-4xl text-slate-100 ">
                      {sliderContent[2].fTitle}
                    </h2>
                    <h2 className="text-xl md:text-4xl text-slate1000 ">
                      {sliderContent[2].lTitle}
                    </h2>
                  </div>
                  <div
                    className={`${
                      state.isActive3 ? "flex" : "hidden"
                    } mt-[6rem] md:mt-[13rem] justify-between mx-2 items-center`}
                  >
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
