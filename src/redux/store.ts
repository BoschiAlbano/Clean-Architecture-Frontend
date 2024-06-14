import { User, authenticatedUser } from "../models/user";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user/user.slice";
import authSlice from "./slices/auth/auth.slice";
import rickandmortySlice from "./slices/rickandmorty/rickandmorty.slice";
import { StoreRickAndMorty } from "../pages/task/models";
import switchModeSlice, {
    switchMode,
} from "./slices/switchMode/switchMode.slice";
export interface AppStore {
    user: User;
    auth: authenticatedUser;
    rickandmorty: StoreRickAndMorty[];
    switchMode: switchMode;
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice,
        auth: authSlice,
        rickandmorty: rickandmortySlice,
        switchMode: switchModeSlice,
    },
});

// Exportar el tipo del Store
export type RootState = ReturnType<typeof store.getState>;

// Exportar el tipo del Dispatch
export type AppDispatch = typeof store.dispatch;
