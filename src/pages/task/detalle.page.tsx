import { Link, useParams } from "react-router-dom";

import { useFetch } from "./hooks/useFetch";
import { GetCharacterById } from "./services/rickandmorty.services";
import { toast } from "sonner";
import Back from "./components/back.svg";

const Detalle = () => {
    const { tareaId } = useParams();

    // const { data, error, loading } = useFetch(() =>
    //     GetCharacterById(Number(tareaId), abortController)
    // );

    const { data, error, loading } = useFetch((abortController) =>
        GetCharacterById(Number(tareaId), abortController)
    );

    return (
        <div className=" relative w-full">
            <h1 className="w-full text-center">
                Obtener el Detalle del personaje con id: {tareaId} desde la api
                rick and morty
            </h1>

            <section className=" w-full flex flex-row justify-center items-center flex-wrap gap-5">
                {!loading && data && (
                    <div className=" bg-gray-200 shadow-xl flex flex-col justify-center items-center p-2">
                        <img src={data?.image} alt={data?.name} />
                        <p>Id: {data?.id}</p>
                        <p>Nombre: {data?.name}</p>
                        <p>Estado: {data?.status}</p>
                        <p>tipo: {data?.type}</p>
                        <p>Genero: {data?.gender}</p>
                        <p>Episodios: {data?.episode?.length}</p>
                        <p>Creado: {data?.created}</p>
                    </div>
                )}
            </section>

            <div className=" absolute top-0 right-0 rounded-full h-[50px] w-[50px]">
                <Link to={"/Obtener"}>
                    <Back></Back>
                </Link>
            </div>

            {!loading && error ? toast.error(error) : null}
        </div>
    );
};

export default Detalle;
