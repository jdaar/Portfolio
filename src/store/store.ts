import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { langs, AVAILABLE_LANG } from "../lang/root.lang";
import { themes, AVAILABLE_THEME } from "../theme/root.theme";

// Defaults
import { LANG_ES } from "../lang/es.lang";
import { THEME_DARK } from "../theme/dark.theme";

// Types
import { RootState } from "./types";

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
    SET_THEME: (state: RootState, action: PayloadAction<AVAILABLE_THEME>) => ({
      ...state,
      theme: themes[action.payload],
    }),
  },
});

const { actions, reducer } = store;
export const { SET_LANG, SET_THEME } = actions;
export default reducer;
