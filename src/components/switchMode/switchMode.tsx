import { useSwitchModeSelector } from "../../redux/slices/switchMode/hook/useSwitchModeStore";
import { useSwitchModeActions } from "../../redux/slices/switchMode/hook/useSwitchModeActions";
const SwitchMode = () => {
    const mode = useSwitchModeSelector((store) => store.switchMode);
    const { CambiarModo } = useSwitchModeActions();

    return (
        <button className="  " onClick={() => CambiarModo()}>
            <p className={`font-semibold text-lg text-[#59A139] `}>
                {mode.isDarckMode ? "Claro" : "Oscuro"}
            </p>
        </button>
    );
};

export default SwitchMode;
