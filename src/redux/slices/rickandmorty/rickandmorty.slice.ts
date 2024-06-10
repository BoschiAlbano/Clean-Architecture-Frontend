import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StoreRickAndMorty } from "../../../pages/task/models";
import {
    GetlocalStorage,
    DeleteLocalStorage,
    DeleteItemLocalStorage,
    UpdateRickandmorty,
    CreateRickandmorty,
} from "../../../utils/localStorage";
import { toast } from "sonner";

const llave: string = "rickandmorty";
const initialState: StoreRickAndMorty[] = [];

export const rickandmortySlice = createSlice({
    name: "rickandmorty",
    initialState: GetlocalStorage(llave, initialState) as StoreRickAndMorty[],
    reducers: {
        saveRickandmorty: (state, action: PayloadAction<StoreRickAndMorty>) => {
            // Redux toolkit usa immer -> puedo leer el stado de esta forma
            console.log(JSON.stringify(state));

            const save = CreateRickandmorty(llave, action.payload, state);
            // Redux toolkit usa immer -> puedo modificar el estado sin remplazarlo.
            toast.success("Guardado en ReduxToolKit");

            return save;
        },
        deleteRickandmorty: (state, action: PayloadAction<number>) => {
            toast.success("Eliminado de ReduxToolKit");
            return DeleteItemLocalStorage(llave, action.payload, state);
        },
        updateRickandmorty: (
            state,
            action: PayloadAction<StoreRickAndMorty>
        ) => {
            toast.success("Actualizado de ReduxToolKit");
            return UpdateRickandmorty(llave, action.payload, state);
        },
        resetRickandmorty: () => {
            toast.success("Reset de ReduxToolKit");
            return DeleteLocalStorage(llave, initialState);
        },
    },
});

export const {
    deleteRickandmorty,
    resetRickandmorty,
    saveRickandmorty,
    updateRickandmorty,
} = rickandmortySlice.actions;

export default rickandmortySlice.reducer;
