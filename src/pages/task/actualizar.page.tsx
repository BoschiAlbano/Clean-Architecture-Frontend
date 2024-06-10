import { useParams } from "react-router-dom";
import { useRickandmortySelector } from "../../redux/slices/rickandmorty/hook/useRickandmortyStore";
import { useRickandmortyActions } from "../../redux/slices/rickandmorty/hook/useRickandmortyActions";
import { StoreRickAndMorty } from "./models";
import { IsHasEmptyFields } from "../../utils/isHasEmptyFields";
import { toast } from "sonner";

const Actualizar = () => {
    const { id } = useParams();
    const rickandmortyData = useRickandmortySelector(
        (store) => store.rickandmorty
    ).find((item) => item.id === Number(id));

    const { ActualizarRickandmorty } = useRickandmortyActions();

    const handleActualizar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const { isEmpty, message } = IsHasEmptyFields(formEntries);
        if (isEmpty) {
            toast.error(message);
            return;
        }

        if (rickandmortyData) {
            const datos: StoreRickAndMorty = {
                id: rickandmortyData.id,
                gender: formEntries.gender as string,
                image: formEntries.image as string,
                name: formEntries.name as string,
                species: formEntries.species as string,
            };

            ActualizarRickandmorty(datos);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1>Actualizar Rick And Morty Store</h1>

            <section className=" w-full flex flex-row justify-center items-center flex-wrap gap-5">
                {rickandmortyData && (
                    <form onSubmit={(e) => handleActualizar(e)}>
                        <li className=" bg-gray-200 shadow-xl flex flex-col justify-center items-center p-2 gap-1">
                            <img
                                src={rickandmortyData.image}
                                alt={rickandmortyData.name}
                            />
                            <input
                                className="w-[80%] text-center py-2 bg-slate-300"
                                type="text"
                                placeholder={rickandmortyData.id.toString()}
                                name="id"
                                defaultValue={rickandmortyData.id}
                            />
                            <input
                                className="w-[80%] text-center py-2 bg-slate-300"
                                type="text"
                                placeholder={rickandmortyData.name}
                                name="name"
                                defaultValue={rickandmortyData.name}
                            />
                            <input
                                className="w-[80%] text-center py-2 bg-slate-300"
                                type="text"
                                placeholder={rickandmortyData.gender}
                                name="gender"
                                defaultValue={rickandmortyData.gender}
                            />
                            <input
                                className="w-[80%] text-center py-2 bg-slate-300"
                                type="text"
                                placeholder={rickandmortyData.species}
                                name="species"
                                defaultValue={rickandmortyData.species}
                            />
                            <input
                                className="w-[80%] text-center py-2 bg-slate-300"
                                type="text"
                                placeholder={rickandmortyData.image}
                                name="image"
                                defaultValue={rickandmortyData.image}
                            />
                            <button
                                className=" w-[80%] text-center py-2 bg-slate-400 shadow-lg"
                                type="submit"
                            >
                                Actualizar
                            </button>
                        </li>
                    </form>
                )}
            </section>
        </div>
    );
};

export default Actualizar;
