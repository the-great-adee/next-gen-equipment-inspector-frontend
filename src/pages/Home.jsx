import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-6 h-full space-y-4">
      <TagLine />
      <hr />
      <div className="font-mono text-xl">Login Here to view your Records</div>
      <LoginButton />
    </div>
  );
};

export default Home;

const TagLine = () => {
  return (
    <div className="max-w-2xl  font-extrabold font-serif text-[3rem] leading-tight">
      Empowering millions of Caterpillar Machineries with Ease.
    </div>
  );
};
const LoginButton = () => {
  return (
    <div className="w-20">
      <Link className="" to={"/login"}>
        <div className="relative group bg-black rounded-lg w-28 text-center px-6 p-2 text-white flex items-center justify-between gap-2 transition-all duration-400">
          <p className="mb-1">Login</p>
          <div className="">
            <svg fontSize={3}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />

            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};
