import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

export const useRickandmortySelector: TypedUseSelectorHook<RootState> =
    useSelector;
export const useRickandmortyDispatch: () => AppDispatch = useDispatch;
