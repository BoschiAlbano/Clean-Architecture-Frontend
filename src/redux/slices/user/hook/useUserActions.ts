import { UserSinId } from "../../../../models/user";
import { useAppDispatch } from "./useUserStore";
import { saveUser, deleteUser } from "../user.slice";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const AgregarUsuario = (user: UserSinId) => {
        dispatch(saveUser(user));
    };

    const EliminarUsuario = () => {
        dispatch(deleteUser());
    };

    return { AgregarUsuario, EliminarUsuario };
};
