import { Link } from "react-router-dom";


const HeadNavBar = () => {
  return (<>
    <nav className="bg-white/30 absolute z-50 w-full top-0 backdrop-blur-lg text-black p-3 border-b">
      <div className="mx-auto flex justify-between items-center ">
        <div className="text-black font-bold text-xl sm:text-3xl">
          <Link to={"/"} href="#">Catter Piolt</Link>
        </div>
        <div className="space-x-4 font-mono sm:space-x-8 text-[1rem] sm:text-xl ">
          <Link to={"/"} href="#" className="text-black hover:text-black/60 transition-all duration-400">Home</Link>
          <Link to={"/records"} href="#" className="text-black hover:text-black/60 transition-all duration-400">Records</Link>
          <Link to={"/new"} href="#" className="text-black hover:text-black/60 transition-all duration-400">New</Link>
          <Link to={"/contact"} href="#" className="text-black hover:text-black/60 transition-all duration-400">Contact</Link>
        </div>
        <div className="size-8 sm:size-9">
          <img className='' src={"user-image.png"} />
        </div>
      </div>
    </nav>

  </>
  );
};

export default HeadNavBar;
