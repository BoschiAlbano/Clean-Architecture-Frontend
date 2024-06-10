import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuthDispatch: () => AppDispatch = useDispatch;
