import { Outlet } from "react-router-dom";
import Menu from "./components/menu/menu.component";
import "./home.css";
const Home = () => {
    return (
        <div className="relative w-full min-h-screen h-full flex flex-col justify-start items-center">
            <div className=" absolute z-10 w-full h-full  bg-[#79797948] rickandmorty-bg opacity-[0.9]"></div>
            <div className=" relative z-20 sm:w-[90%] w-[100%] ">
                <Menu />
                <div className=" w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
