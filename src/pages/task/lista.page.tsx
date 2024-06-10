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
        <div className=" w-full flex flex-col justify-center items-center gap-2">
            <h1 className="w-full text-center">
                Lista Guardada en Redux ToolKit
            </h1>
            <ul className=" w-full flex flex-row justify-center items-center flex-wrap gap-5">
                {rickandmortyData.map((item, index) => {
                    return (
                        <li
                            className=" bg-gray-200 shadow-xl flex flex-col justify-center items-center p-2 gap-1"
                            key={index}
                        >
                            <img src={item.image} alt={item.name} />
                            <p>Nombre: {item.name}</p>
                            <p>Genero: {item.gender}</p>
                            <p>Especie: {item.species}</p>
                            <Link
                                className=" w-[80%] text-center py-2 bg-slate-400 shadow-lg"
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
    );
};

export default Lista;
