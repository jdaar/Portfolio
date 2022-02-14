import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { langs } from "../lang/root.lang";

// Defaults
import { LANG_ES } from "../lang/es.lang";
import { THEME_DARK } from "../theme/dark.theme";

// Types
import { RootState, AVAILABLE_LANG } from "./types";

const initialState: RootState = {
  lang: LANG_ES,
  theme: THEME_DARK,
};

const store = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    SET_LANG: (state: RootState, action: PayloadAction<AVAILABLE_LANG>) => ({
      ...state,
      lang: langs[action.payload],
    }),
  },
});

const { actions, reducer } = store;
export const { SET_LANG } = actions;
export default reducer;
