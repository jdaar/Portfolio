import { THEME_DARK } from "./dark.theme";
import { THEME_LIGHT } from "./light.theme";

export enum AVAILABLE_THEME {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export type Theme = {
  background: string;
  secondary_background: string;
  detail_color: string;
  primary_color: string;
  secondary_color: string;
};

export const themes: { [key in AVAILABLE_THEME]: Theme } = {
  DARK: THEME_DARK,
  LIGHT: THEME_LIGHT,
};
