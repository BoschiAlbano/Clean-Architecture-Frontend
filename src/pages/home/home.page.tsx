import { Link, Outlet } from "react-router-dom";
import Menu from "./components/menu/menu.component";
import NavLink from "../../components/navLink/navLink";

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Menu titulo="Home" />
            <h1>Descripcion del proyecto...</h1>
            <Outlet />
        </div>
    );
};

export default Home;
