import { toast } from "sonner";
import NavLink from "../../../../components/navLink/navLink";
import { useAuthActions } from "../../../../redux/slices/auth/hook/useAuthActions";
import SwitchMode from "../../../../components/switchMode/switchMode";
const Menu = () => {
    const { Logout } = useAuthActions();

    return (
        <nav className="  z-[99] top-0 right-0 h-[60px] w-full flex flex-row justify-between items-center  shadow-xl px-4 bg-[var(--Transparente)]">
            <div className="relative">
                <SwitchMode />
            </div>

            <ul className=" flex flex-row justify-center items-center gap-10 ">
                <li>
                    <NavLink to={"/"}>Rick And Morty</NavLink>
                </li>
                <li>
                    <NavLink to={"/Obtener"}>Ver lista</NavLink>
                </li>
            </ul>

            <button
                className=" text-xl font-bold bg-transparent "
                onClick={() => {
                    {
                        toast("¿Quiere Cerrar Sesion?", {
                            action: {
                                label: "Si",
                                onClick: () => Logout(),
                            },
                        });
                    }
                }}
            >
                Cerrar Sesion
            </button>
        </nav>
    );
};

export default Menu;
