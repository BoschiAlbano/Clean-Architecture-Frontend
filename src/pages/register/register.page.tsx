import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../redux/slices/user/hook/useUserActions";
import { UserSinId } from "../../models";
import { IsHasEmptyFields } from "../../utils/isHasEmptyFields";

const Register = () => {
    const navigate = useNavigate();
    const { AgregarUsuario } = useUserActions();

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
        <div className=" flex flex-col justify-center items-center gap-10">
            <h1>Pagina de Register</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    value={"Albano"}
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                />
                <input
                    value={"Boschi"}
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                />
                <input
                    value={"boschi.albano.jose@gmial.com"}
                    type="email"
                    placeholder="boschi.albano.jose@gmial.com"
                    name="email"
                />
                <input
                    value={"Albano"}
                    type="text"
                    placeholder="Usuario"
                    name="usuario"
                />
                <input
                    value={"123"}
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <button type="submit">Enviar</button>
            </form>

            <Link to={"/login"}>Login</Link>
        </div>
    );
};

export default Register;
