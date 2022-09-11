import { LANG_EN } from "./en.lang";
import { LANG_ES } from "./es.lang";

export enum AVAILABLE_LANG {
  ES = "ES",
  EN = "EN",
}

export interface Lang {
  Home: {
    Hero: {
      Subtitle: string;
      Links: {
        Projects: string;
        AboutMe: string;
      };
    };
    AboutMe: {
      WorkInProgress: string;
    };
  };
}

export const langs: { [key in AVAILABLE_LANG]: Lang } = {
  ES: LANG_ES,
  EN: LANG_EN,
};
