import { NavLink } from "react-router-dom";
import imgcss from "..//..//..//images/css.png";
import imghtml from "..//..//..//images/html.png";
import imgjs from "..//..//..//images/js.png";
import imgreact from "..//..//..//images/react.png";
import imgtw from "..//..//..//images/tw.png";
const HeroComponent = ({ onShowModal }) => {
  const handleModal = () => {
    onShowModal((prev) => !prev);
  };

  return (
    <div className="text-slate-50 bg-white/50 md:w-full md:mt-5 p-2 md:h-[calc(100vh_-_100px)] md:rounded-tl-xl flex justify-center items-center flex-col transition-all md:order-1 order-2">
      <figure className="">
        <h1 className="font-extrabold text-3xl">Hi!</h1>
        <h1>This is Hector Dela Cruz Raposas.</h1>
        <h1>My passion in coding let me did this thing.</h1>
        <button className="cursor-pointer p-2 bg-green-400 rounded-md mt-5">
          <NavLink to="about">Learn More...</NavLink>
        </button>
        <figure className="mt-5 w-full flex justify-center flex-col">
          <h1>Tech Stack</h1>
          <figure className="mt-2 flex gap-1">
            <img className="w-5 h-4" src={imghtml} alt="html image" />
            <img className="w-5 h-4" src={imgcss} alt="css image" />
            <img className="w-5 h-4" src={imgjs} alt="javascript image" />
            <img className="w-5 h-4" src={imgreact} alt="react image" />
            <img className="w-5 h-4" src={imgtw} alt="tailwind image" />
          </figure>
        </figure>
        <button
          className="cursor-pointer p-2 bg-red-500 rounded-md mt-5"
          onClick={handleModal}
        >
          Hire Me
        </button>
      </figure>
    </div>
  );
};

export default HeroComponent;
