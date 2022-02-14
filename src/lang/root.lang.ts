import { AVAILABLE_LANG } from "../store/types";
import { LANG_EN } from "./en.lang";
import { LANG_ES } from "./es.lang";

export interface Lang {
  Home: {
    Hero: {
      Subtitle: string;
    };
  };
}

export const langs: { [key in AVAILABLE_LANG]: Lang } = {
  EN: LANG_EN,
  ES: LANG_ES,
};
