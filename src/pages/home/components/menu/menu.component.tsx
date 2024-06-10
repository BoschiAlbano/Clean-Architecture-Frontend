import { toast } from "sonner";
import NavLink from "../../../../components/navLink/navLink";
import { useAuthActions } from "../../../../redux/slices/auth/hook/useAuthActions";

const Menu = ({ titulo = "" }: { titulo: string }) => {
    const { Logout } = useAuthActions();

    return (
        <nav className="h-[80px] w-full flex flex-row justify-between items-center bg-slate-200 px-5">
            <NavLink to="/">
                <p className=" text-black text-2xl font-extrabold">{titulo}</p>
            </NavLink>

            <ul className=" flex flex-row justify-center items-center gap-10">
                <li>
                    <NavLink to={"/rickandmorty"}>Rick And Morty</NavLink>
                </li>
                <li>
                    <NavLink to={"/Obtener"}>Ver lista</NavLink>
                </li>
            </ul>

            <button
                className=" text-black text-xl font-bold bg-transparent"
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
