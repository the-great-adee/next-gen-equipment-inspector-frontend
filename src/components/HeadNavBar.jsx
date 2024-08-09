import { Link } from "react-router-dom";


const HeadNavBar = () => {
  return (
    <nav className="bg-white/30 absolute w-full top-0 backdrop-blur-lg text-black p-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-3xl">
          <Link to={"/"} href="#">Catter Piolt</Link>
        </div>
        <div className="space-x-8 sm:space-x-4 text-xl">
          <Link to={"/"} href="#" className="text-black hover:text-gray-400">Home</Link>
          <Link to={"/records"}  href="#" className="text-black hover:text-gray-400">Records</Link>
          <Link to={"/new"}  href="#" className="text-black hover:text-gray-400">New</Link>
          <Link to={"/contact"}  href="#" className="text-black hover:text-gray-400">Contact</Link>
        </div>
        <div className="">
          <img style={
            
            {height:45,
              width:45
            }
          } className = '' src={"user-image.png"}/>
        </div>
      </div>
    </nav>
  );
};

export default HeadNavBar;
