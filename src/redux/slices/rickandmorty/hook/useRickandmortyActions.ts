import { StoreRickAndMorty } from "../../../../pages/task/models";
import { useRickandmortyDispatch } from "./useRickandmortyStore";
import {
    saveRickandmorty,
    deleteRickandmorty,
    resetRickandmorty,
    updateRickandmorty,
} from "../rickandmorty.slice";

export const useRickandmortyActions = () => {
    const dispatch = useRickandmortyDispatch();

    const AgregarRickandmorty = (rickandmorty: StoreRickAndMorty) => {
        dispatch(saveRickandmorty(rickandmorty));
    };

    const BorrarRickandmorty = (rickandmortyId: number) => {
        dispatch(deleteRickandmorty(rickandmortyId));
    };

    const ResetRickandmorty = () => {
        dispatch(resetRickandmorty());
    };

    const ActualizarRickandmorty = (rickandmorty: StoreRickAndMorty) => {
        dispatch(updateRickandmorty(rickandmorty));
    };

    return {
        AgregarRickandmorty,
        ActualizarRickandmorty,
        ResetRickandmorty,
        BorrarRickandmorty,
    };
};
