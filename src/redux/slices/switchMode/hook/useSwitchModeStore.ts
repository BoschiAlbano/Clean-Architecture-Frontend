import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

export const useSwitchModeSelector: TypedUseSelectorHook<RootState> =
    useSelector;
export const useSwitchModeDispatch: () => AppDispatch = useDispatch;
