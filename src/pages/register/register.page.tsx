import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../redux/slices/user/hook/useUserActions";
import { UserSinId } from "../../models";
import { IsHasEmptyFields } from "../../utils/isHasEmptyFields";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
import ArrowDown from "../login/components/arrowDown.svg";
import "./register.css";
import SwitchMode from "../../components/switchMode/switchMode";
const Register = () => {
    const navigate = useNavigate();
    const { AgregarUsuario } = useUserActions();
    const [isUp, setisUp] = useState<boolean>(false);

    useEffect(() => {
        setisUp(true);
    }, []);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fromdata = new FormData(e.currentTarget);
        const datos = Object.fromEntries(fromdata.entries());

        // validar datos vacios
        const { isEmpty, message } = IsHasEmptyFields(datos);
        if (isEmpty) {
            toast.error(message);
            return;
        }

        const usuario: UserSinId = {
            nombre: datos.nombre as string,
            apellido: datos.apellido as string,
            email: datos.email as string,
            password: datos.password as string,
            usuario: datos.usuario as string,
        };

        // Enviar servidor.
        // Respuesta Guardar en Redux
        AgregarUsuario(usuario);
        // toast.success("Usuario Creado...");

        navigate("/login");
        // setTimeout(() => {

        // }, 200);
    };

    return (
        <div className="w-full h-[100svh] min-h-full flex flex-col justify-center items-center gap-10  ">
            <div className=" absolute w-full h-full bg-[#79797948] rickWallpaper "></div>
            <section className="sm:min-w-[400px] min-w-[100%]  sm:h-[80%] h-[100%]  relative rounded-lg overflow-hidden">
                <img
                    className=" absolute w-full h-full object-cover"
                    src="/rickandmortyLogin.jpg"
                    alt=""
                />

                <Link
                    to={"/login"}
                    className=" absolute bottom-0 left-0 flex justify-center items-center m-1 rounded-[5px] py-1 px-2 shadow-2xl"
                >
                    <p className=" font-semibold text-lg text-[#59A139]">
                        Login
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
                    className={`bg-gradient-to-b from-[#CEAA16] via-[#e7bb09] to-[#D17C06] flex flex-col justify-between items-center p-5 absolute bottom-0 w-full opacity-[0.95] h-[60%] rounded-t-lg ${
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

                    <h1 className=" text-2xl">Register</h1>

                    <Input type="text" palabra="Nombre" name="nombre" />
                    <Input type="text" palabra="Apellido" name="apellido" />
                    <Input type="email" palabra="E-mail" name="email" />
                    <Input type="text" palabra="Usuario" name="usuario" />
                    <Input type="password" palabra="Password" name="password" />

                    <button
                        className="button py-2 px-4 rounded-[5px] w-full text-xl"
                        type="submit"
                    >
                        Ingresar
                    </button>
                    <p className=" text-center">
                        ¿Ya tienes una cuenta? ingresa ahora
                        <br />
                        <Link to={"/login"}>Login</Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Register;
