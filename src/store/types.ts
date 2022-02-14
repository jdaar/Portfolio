import { Lang } from "../lang/root.lang";
import { Theme } from "../theme/root.theme";

export type RootState = {
  lang: Lang;
  theme: Theme;
};

export enum AVAILABLE_LANG {
  ES = "ES",
  EN = "EN",
}
