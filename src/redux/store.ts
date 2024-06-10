import { User, authenticatedUser } from "../models/user";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user/user.slice";
import authSlice from "./slices/auth/auth.slice";
import rickandmortySlice from "./slices/rickandmorty/rickandmorty.slice";
import { StoreRickAndMorty } from "../pages/task/models";

export interface AppStore {
    user: User;
    auth: authenticatedUser;
    rickandmorty: StoreRickAndMorty[];
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice,
        auth: authSlice,
        rickandmorty: rickandmortySlice,
    },
});

// Exportar el tipo del Store
export type RootState = ReturnType<typeof store.getState>;

// Exportar el tipo del Dispatch
export type AppDispatch = typeof store.dispatch;
