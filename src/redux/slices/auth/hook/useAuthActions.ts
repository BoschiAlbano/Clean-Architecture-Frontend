import { useAuthDispatch } from "./useAuthStore";
import { login, logout } from "../auth.slice";
import { authenticatedUser } from "../../../../models";

export const useAuthActions = () => {
    const dispatch = useAuthDispatch();

    const Login = (UserAuth: authenticatedUser) => {
        dispatch(login(UserAuth));
    };

    const Logout = () => {
        dispatch(logout());
    };

    return { Login, Logout };
};
