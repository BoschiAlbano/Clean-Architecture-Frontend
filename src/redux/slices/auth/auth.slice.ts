import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authenticatedUser } from "../../../models";
import { toast } from "sonner";
import {
    CreateLocalStorage,
    DeleteLocalStorage,
    GetlocalStorage,
} from "../../../utils/localStorage";

const initialState: authenticatedUser = {
    usuario: "",
    nombre: "",
    apellido: "",
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: GetlocalStorage("AuthenticatedUser", initialState),
    reducers: {
        login: (state, action: PayloadAction<authenticatedUser>) => {
            toast.success("Login Exitoso...");
            return CreateLocalStorage("AuthenticatedUser", action.payload);
        },
        logout: () => {
            toast.warning("Sesion Finalizada");
            return DeleteLocalStorage("AuthenticatedUser", initialState);
        },
    },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
