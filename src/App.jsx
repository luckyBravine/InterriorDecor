import Navbar from "./components/Navbar";
// import bedthree from  './assets/bedthree.jpg';
// import bedtwo from './assets/bedtwo.png';
// import beduno from './assets/beduno.png';
import hdone from './assets/hdone.jpg';
import hdtwo from './assets/hdtwo.jpg';
import hdthree from './assets/hdthree.jpg'

const App = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar/>
      <div className="z-10 object-cover   w-full h-full flex absolute">
        <img src={hdone} alt="" className="w-full h-[100vh] object-fit" />
        <img src={hdtwo} alt="" className="w-full h-[100vh] object-fit" />
        <img src={hdthree} alt="" className="w-full h-[100vh] object-cover" />
      </div>
    </div>
  )
}

export default App
