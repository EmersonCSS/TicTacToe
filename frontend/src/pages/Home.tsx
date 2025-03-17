import '../index.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col !w-[100] items-center !text-center h-screen place-content-center">
      <h1 className="!text-red-500 font-bold font-['8bit']">TIC - TAC - TOE</h1>
      <div className="flex space-x-2 items-center mt-3">
        <p className="italic font-['8bit']">This is just a test for an Electron Deskptop App</p>
        <p>( ^ -- ^ )</p>
      </div>

      <Link className="font-['8bit'] mt-8 border-1 py-2 px-4 rounded-xl bg-black border-white !text-white hover:bg-white hover:!text-black  hover:border-black transition-all duration-500" to={"/game"}>PLAY</Link>
    </div>
  );
}