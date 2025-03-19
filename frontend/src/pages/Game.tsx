import { Link } from 'react-router-dom';
import '../index.css';
import { cleanGame } from '../../../backend/game/game'

export default function Home() {
    return (


        <div className="flex flex-col !w-[100] items-center !text-center h-screen place-content-center">
            <h1 className="!text-red-500 font-bold font-['8bit']">TIC - TAC - TOE</h1>

            <div className="flex flex-col pt-10 space-y-6">
                <div className="flex space-x-6">
                    <button className="size-28 !bg-white !text-black"></button>
                    <button className="size-28 !bg-white !text-black"></button>
                    <button className="size-28 !bg-white !text-black"></button>
                </div>

                <div className="flex space-x-6">
                    <button className="size-28 !bg-white !text-black"></button>
                    <button className="size-28 !bg-white !text-black"></button>
                    <button className="size-28 !bg-white !text-black"></button>
                </div>

                <div className="flex space-x-6">
                    <button className="size-28 !bg-white !text-black"></button>
                    <button className="size-28 !bg-white !text-black"></button>
                    <button className="size-28 !bg-white !text-black"></button>
                </div>
                
            </div>

            <Link className="font-['8bit'] mt-8 border-1 py-2 px-4 rounded-xl bg-black border-white !text-white hover:bg-white hover:!text-black  hover:border-black transition-all duration-500" to={"/"}>RETURN</Link>
        </div>

    );
}