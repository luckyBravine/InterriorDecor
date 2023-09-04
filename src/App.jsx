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
import {CgArrowLongRight} from 'react-icons/cg'

// import { gsap } from "gsap";
import { useState, useRef } from "react";

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
          className="flex justify-center mx-auto mt-[290px] w-[30%] py-6"
        >
          <div>
            <div className="flex  items-center py-6">
              <div className="w-[30px] h-[2px] bg-slate-300 mr-3 relative"></div>
              <span className="text-slate-300 text-lg">{sliderContent[0].place}</span>
            </div>
            <h1 className="text-8xl text-white">{sliderContent[0].fTitle}</h1>
            <h1 className="text-8xl text-white">{sliderContent[0].lTitle}</h1>
            <p className="text-slate-300 text-sm font-poppins leading-6">{sliderContent[0].description}</p>
          </div>
          <div className="hidden">
            <span>{sliderContent[1].place}</span>
            <h1>{sliderContent[1].fTitle}</h1>
            <h1>{sliderContent[1].lTitle}</h1>
            <p>{sliderContent[1].description}</p>
          </div>
          <div className="hidden">
            <span>{sliderContent[2].place}</span>
            <h1>{sliderContent[2].fTitle}</h1>
            <h1>{sliderContent[2].lTitle}</h1>
            <p>{sliderContent[2].description}</p>
          </div>
        </div>
        <div
          ref={(el) => {
            imageSlide.current = el;
          }}
          className="flex flex-col w-[60%] mt-[235px] py-6"
        >
          <div className="flex flex-col">
            <div className="flex justify-between mx-10 py-2 items-center">
              <div>
                <span className="flex text-slate-200 text-2xl">
                  {sliderContent[0].number}/3
                </span>
              </div>
              <div className="flex text-slate-200 text-2xl">
                <BiLeftArrowCircle />
                <BiRightArrowCircle />
              </div>
            </div>
            <div className="w-[88%] h-[2px] bg-slate-300 my-6 relative flex justify-center mx-auto"></div>
            <div className="flex justify-evenly text-white ">
              <div className="bg-custom-image-one object-cover w-[200px] h-[280px]">
                <div className="flex flex-col justify-center mt-10">
                  <div className="text-center">
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
                  <div className="hidden">
                    <span>
                      DISCOVER <BiRightArrowCircle />
                    </span>
                    <div>
                      <BiLoaderCircle />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-custom-image-two w-[200px] h-[280px]">
                <div className="flex flex-col justify-center mt-10">
                  <div className="text-center hidden">
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
                  <div className="flex mt-[13rem] justify-between mx-2 items-center">
                    <span className="flex text-sm items-center">
                      DISCOVER <CgArrowLongRight className="text-base" />
                    </span>
                    <div>
                      <BiLoaderCircle className="flex text-base items-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-custom-image-three w-[200px] h-[280px]">
                <div className="flex flex-col justify-center mt-10">
                  <div className="text-center">
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
                  <div className="hidden">
                    <span>
                      DISCOVER <BiRightArrowCircle />
                    </span>
                    <div>
                      <BiLoaderCircle />
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
