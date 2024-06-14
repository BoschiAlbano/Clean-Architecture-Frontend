import { toast } from "sonner";
import { useFetchRickandmorty } from "./hooks/useFetch";
import { useState } from "react";
import { useRickandmortyActions } from "../../redux/slices/rickandmorty/hook/useRickandmortyActions";
import Back from "../../components/svg/back.svg";
// import Cards from "../home/components/cards/cards";

const ReckandmortyPage = () => {
    const { AgregarRickandmorty } = useRickandmortyActions();
    const [keyName, setkeyName] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const { data, error, loading } = useFetchRickandmorty(keyName, page);

    console.log(data);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const { keyName } = formEntries;

        if (keyName === "") {
            toast.warning("complete el campo para buscar un personaje");
            return;
        }
        setkeyName(keyName as string);
        setPage(1);
    };

    const handleClick = (id: number) => {
        if (data) {
            const item = data.results.find((i) => i.id === id);
            item && AgregarRickandmorty(item);
        }
    };

    return (
        <section className="relative  w-full  flex flex-col justify-start items-center gap-5  py-4">
            <h1 className="w-full text-center font-serif rounded-[5px]">
                Api de Reck and morty - Buscar un personaje - guardar personaje
                en redux toolkit - CRUD - Persistencia en local Storage - Clean
                Architecture
            </h1>

            <div className=" relative w-full min-h-[calc(100vh-150px)] flex flex-col items-center gap-4 bg-[var(--Transparente)] py-5 rounded-[5px]">
                <form
                    className="text-center h-[40px] border rounded-lg overflow-hidden w-[50%]"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <input
                        className=" bg-white text-[var(--Color-2)] w-[80%] outline-none h-full  text-center"
                        type="text"
                        placeholder="Buscar Personaje"
                        name="keyName"
                    />
                    <button
                        className=" w-[20%] px-2 m-0 border-0 py-1 bg-[var(--Color-2)] shadow-lg h-full"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Cargando..." : "Buscar"}
                    </button>
                    {error && toast.error(error)}
                </form>

                <div className=" w-full  flex flex-col justify-center items-center ">
                    {!loading && data?.results.length ? (
                        <div>
                            <ul className="  w-[100%] flex flex-row justify-center items-center flex-wrap gap-2">
                                {data?.results.map((item, index) => {
                                    return (
                                        <li
                                            className=" bg-[var(--Transparente)] border-[2px] shadow-xl p-2 text-center max-w-[200px]"
                                            key={index}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className=" object-cover"
                                            />
                                            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                                                Nombre: {item.name}
                                            </p>
                                            <p>Genero: {item.gender}</p>
                                            <p>Especie: {item.species}</p>
                                            <button
                                                className=" w-[80%] py-2 bg-[var(--Color-2)] shadow-lg"
                                                onClick={() =>
                                                    handleClick(item.id)
                                                }
                                            >
                                                Agregar
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className=" flex flex-row justify-center items-center gap-4">
                                <button
                                    className=" px-2 bg-[var(--Color-2)] mt-4 h-[50px] rounded-[5px] flex flex-row justify-center items-center gap-4"
                                    disabled={data.info.prev ? false : true}
                                    onClick={() => setPage(page - 1)}
                                >
                                    <p className=" font-bold flex flex-row justify-center items-center">
                                        <Back className="w-[30px]" />
                                    </p>
                                </button>

                                <button
                                    className={`px-2 bg-[var(--Color-2)] mt-4 h-[50px] rounded-[5px] flex flex-row justify-center items-center gap-4`}
                                    disabled={data.info.next ? false : true}
                                    onClick={() => setPage(page + 1)}
                                >
                                    <p className=" font-bold flex flex-row justify-center items-center">
                                        <Back className="rotate-180 w-[30px]" />
                                    </p>
                                </button>
                            </div>

                            <div className=" absolute bottom-0 right-0 flex flex-row justify-center items-center gap-4 px-4 py-2">
                                <p>
                                    {page} / {data.info.pages} Paginas -{" "}
                                    {data.info.count} Resultdados
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default ReckandmortyPage;

// <p className="flex flex-row justify-center items-center">
//     Siguite
//     <Back className="rotate-180 w-[30px] " />
// </p>;
