import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/slices/user/hook/useUserStore";
import { useAuthActions } from "../../redux/slices/auth/hook/useAuthActions";

import { useAuthSelector } from "../../redux/slices/auth/hook/useAuthStore";
import { useLocation } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const data = useAppSelector((state) => state.user);
    const { Login } = useAuthActions();
    const location = useLocation();

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
        <div className=" flex flex-col justify-center items-center gap-10">
            <h1>pagina de Login</h1>

            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input name="usuario" type="text" placeholder="Usuario" />
                <input
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                />

                <button type="submit">Ingresar a Home</button>
            </form>
            <Link to={"/register"}>Register</Link>
        </div>
    );
};

export default Login;
