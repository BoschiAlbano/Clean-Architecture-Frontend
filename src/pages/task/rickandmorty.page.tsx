import { toast } from "sonner";
import { useFetchRickandmorty } from "./hooks/useFetch";
import { useState } from "react";
import { useRickandmortyActions } from "../../redux/slices/rickandmorty/hook/useRickandmortyActions";

const ReckandmortyPage = () => {
    const { AgregarRickandmorty } = useRickandmortyActions();
    const [keyName, setkeyName] = useState<string>("");
    const { data, error, loading } = useFetchRickandmorty(keyName);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const { keyName } = formEntries;

        if (keyName === "") {
            toast.warning("complete el campo para buscar un personaje");
            return;
        }
        // Hook -> Service -> Adapter
        setkeyName(keyName as string);
    };

    const handleClick = (id: number) => {
        if (data) {
            const item = data.find((i) => i.id === id);
            item && AgregarRickandmorty(item);
        }
    };

    return (
        <section className=" w-full flex flex-col justify-center items-center gap-10">
            <h1 className="w-full text-center">
                Api de Reck and morty - Buscar un personaje - guardar personaje
                en redux toolkit - CRUD - Persistencia en local Storage
            </h1>

            <form
                className="text-center h-[40px] border bg-slate-200 rounded-lg overflow-hidden"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    className=" outline-none h-full  text-center"
                    type="text"
                    placeholder="Buscar Personaje"
                    name="keyName"
                />
                <button
                    className=" px-2 py-1 bg-slate-400 shadow-lg h-full"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Cargando..." : "Buscar"}
                </button>
            </form>

            {!loading && data.length ? (
                <ul className=" w-full flex flex-row justify-center items-center flex-wrap gap-5">
                    {data.map((item, index) => {
                        return (
                            <li
                                className=" bg-gray-200 shadow-xl flex flex-col justify-center items-center p-2"
                                key={index}
                            >
                                <img src={item.image} alt={item.name} />
                                <p>Nombre: {item.name}</p>
                                <p>Genero: {item.gender}</p>
                                <p>Especie: {item.species}</p>
                                <button
                                    className=" w-[80%] py-2 bg-slate-400 shadow-lg"
                                    onClick={() => handleClick(item.id)}
                                >
                                    Agregar
                                </button>
                            </li>
                        );
                    })}
                </ul>
            ) : null}

            {error && <p>{error}</p>}
        </section>
    );
};

export default ReckandmortyPage;
