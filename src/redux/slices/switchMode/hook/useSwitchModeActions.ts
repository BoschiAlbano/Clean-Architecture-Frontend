import { switchModeUpdate } from "../switchMode.slice";
import { useSwitchModeDispatch } from "./useSwitchModeStore";

export const useSwitchModeActions = () => {
    const dispatch = useSwitchModeDispatch();

    const CambiarModo = () => {
        dispatch(switchModeUpdate());
    };

    return { CambiarModo };
};
