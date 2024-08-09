import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div className="px-6 h-full space-y-4">
        <TagLine/>
        <div className="font-mono text-xl">Login Here to view your Records</div>
        <div >
        <Link  to={"/login"} className=" bg-black rounded-lg w-28 text-center px-6 pb-3 p-2 text-white">Login</Link>
        </div>
        
    </div>
  )
}

export default Home



 const TagLine = () => {
  return (
    <div className="max-w-2xl  font-extrabold font-serif sm:text-[4rem] leading-tight">
        Empowering millions of Caterpillar Machineries with Ease.
    </div>
  )
}
