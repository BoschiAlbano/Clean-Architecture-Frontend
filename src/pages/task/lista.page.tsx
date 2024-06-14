import { Link } from "react-router-dom";
import { useRickandmortySelector } from "../../redux/slices/rickandmorty/hook/useRickandmortyStore";
import Trash from "./components/trash.svg";
import Edit from "./components/edit.svg";
import { useRickandmortyActions } from "../../redux/slices/rickandmorty/hook/useRickandmortyActions";
const Lista = () => {
    const rickandmortyData = useRickandmortySelector(
        (store) => store.rickandmorty
    );

    const { BorrarRickandmorty } = useRickandmortyActions();

    const handleDelete = (id: number) => {
        BorrarRickandmorty(id);
    };

    return (
        <div className=" relative  w-full  flex flex-col justify-start items-center gap-5  py-4">
            <h1 className="w-full text-center font-serif rounded-[5px]">
                Lista Guardada en Redux ToolKit
            </h1>

            <div className=" relative w-full min-h-[calc(100vh-150px)] flex flex-col items-center gap-4 bg-[var(--Transparente)] py-5 rounded-[5px]">
                <ul className=" w-full flex flex-row justify-center items-center flex-wrap gap-5">
                    {rickandmortyData.map((item, index) => {
                        return (
                            <li
                                className=" bg-[var(--Transparente)] border-[2px] shadow-xl p-2 text-center max-w-[200px] flex flex-col gap-1 justify-center items-center"
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
                                <Link
                                    className="w-[80%] py-2 bg-[var(--Color-2)] shadow-lg"
                                    to={`/detalle/${item.id}`}
                                >
                                    Detalle
                                </Link>
                                <div className=" w-full flex flex-row justify-center items-center gap-16">
                                    <Link
                                        to={`/actualizar/${item.id}`}
                                        className="  w-[35px] h-[35px] cursor-pointer bg-transparent"
                                    >
                                        <Edit fill="#F1C40F"></Edit>
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className=" w-[25px] h-[25px] cursor-pointer bg-transparent"
                                    >
                                        <Trash fill="#E59866"></Trash>
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Lista;
