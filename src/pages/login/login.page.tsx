import "./login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/slices/user/hook/useUserStore";
import { useAuthActions } from "../../redux/slices/auth/hook/useAuthActions";

import { useAuthSelector } from "../../redux/slices/auth/hook/useAuthStore";
import { useLocation } from "react-router-dom";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
import ArrowDown from "./components/arrowDown.svg";
import SwitchMode from "../../components/switchMode/switchMode";

const Login = () => {
    const navigate = useNavigate();
    const data = useAppSelector((state) => state.user);
    const { Login } = useAuthActions();
    const location = useLocation();

    const [isUp, setisUp] = useState<boolean>(false);

    useEffect(() => {
        setisUp(true);
    }, []);

    const { isAuthenticated } = useAuthSelector((store) => store.auth);
    if (isAuthenticated) {
        return <Navigate to={"/"}></Navigate>;
    }
    // Menjo de form de forma descontrolada - controlado -> (cons estados)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const { usuario, password } = formEntries;

        console.log(usuario, password);

        if (usuario == "" || password == "") {
            toast.error("Erro, Hay Campos Vacios");
            return;
        }

        // Comprobar si es el mismo usuario
        if (data.usuario !== usuario || data.password !== password) {
            toast.error("Error, Usuario y/o contraseña son incorrectos...");
            return;
        }

        Login({
            isAuthenticated: true,
            nombre: data.nombre,
            apellido: data.apellido,
            usuario: data.usuario,
        });

        const { state } = location;
        navigate(state?.location?.pathname ?? "/");
    };

    return (
        <div
            className={`w-full h-[100svh] min-h-full flex flex-col justify-center items-center gap-10 `}
        >
            <div className=" absolute w-full h-full bg-[#79797948] rickWallpaper "></div>
            <section className="sm:min-w-[400px] min-w-[100%]  sm:h-[80%] h-[100%]  relative rounded-lg overflow-hidden">
                <img
                    className=" absolute w-full h-full object-cover"
                    src="/rickandmortyLogin.jpg"
                    alt=""
                />

                <Link
                    to={"/register"}
                    className=" absolute bottom-0 left-0 flex justify-center items-center m-1 rounded-[5px] py-1 px-2 shadow-2xl"
                >
                    <p className=" font-semibold text-lg text-[#59A139]">
                        Register
                    </p>
                </Link>

                {/* Switch mode */}
                <div className="absolute bottom-0 right-0 flex justify-center items-center m-1 rounded-[5px] py-1 px-2 shadow-2xl">
                    <SwitchMode />
                </div>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    className={`bg-gradient-to-b from-[#CEAA16] via-[#e7bb09] to-[#D17C06] flex flex-col justify-between items-center p-5 absolute bottom-0 w-full opacity-[0.95] h-[45%] rounded-t-lg ${
                        isUp ? "showDown" : "showUp"
                    }`}
                >
                    <button
                        type="button"
                        onClick={() => setisUp(!isUp)}
                        className=" absolute top-[-38px] bg-[#CEAA16]  w-[80px] h-[40px] rounded-t-full text-center flex justify-center items-center "
                    >
                        <p className={`w-[35px] ${!isUp && "mover"}`}>
                            <ArrowDown
                                className={`fill-[#59A139] ${
                                    isUp ? "rotateDown " : "rotateUp"
                                }`}
                            />
                        </p>
                    </button>

                    <h1 className=" text-2xl">Login</h1>

                    <Input name="usuario" palabra="Usuario" type="text"></Input>

                    <Input
                        name="password"
                        palabra="password"
                        type="password"
                    ></Input>

                    <button
                        className=" button py-2 px-4 rounded-[5px] w-full text-xl"
                        type="submit"
                    >
                        Ingresar
                    </button>
                    <p className=" text-center">
                        ¿Aun no tines Cuenta? registrate ahora
                        <br />
                        <Link to={"/register"}>Register</Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Login;
