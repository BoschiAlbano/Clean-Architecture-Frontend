import { createSlice } from "@reduxjs/toolkit";

import {
    GetOrCreatelocalStorage,
    UpdatelocalStorage,
} from "../../../utils/localStorage";

export interface switchMode {
    isDarckMode: boolean;
}

const initialState: switchMode = {
    isDarckMode: false,
};

const llave = "isDarckMode";
export const switchModeSlice = createSlice({
    name: "switchMode",
    initialState: GetOrCreatelocalStorage(llave, initialState),
    reducers: {
        switchModeUpdate: (state) => {
            return UpdatelocalStorage(llave, state, {
                isDarckMode: !state.isDarckMode,
            });
        },
    },
});

export const { switchModeUpdate } = switchModeSlice.actions;
export default switchModeSlice.reducer;
