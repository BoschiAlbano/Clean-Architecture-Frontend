import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSinId } from "../../../models/user";
import { toast } from "sonner";
import {
    CreateLocalStorage,
    GetlocalStorage,
    DeleteLocalStorage,
} from "../../../utils/localStorage";
const InitialUser: User = {
    id: "null-null-null-null-null",
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    password: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState: GetlocalStorage("user", InitialUser),
    reducers: {
        saveUser: (state, action: PayloadAction<UserSinId>) => {
            const newUser: User = {
                id: crypto.randomUUID(),
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                email: action.payload.email,
                usuario: action.payload.usuario,
                password: action.payload.password,
            };
            toast.success("Usuario Guardado...");
            return CreateLocalStorage("user", newUser);
        },
        deleteUser: () => {
            return DeleteLocalStorage("user", InitialUser);
        },
    },
});

export default userSlice.reducer;

export const { saveUser, deleteUser } = userSlice.actions;
