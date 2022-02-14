/** @jsxImportSource @emotion/react */

import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/types";
import { SET_LANG, SET_THEME } from "../store/store";
import { Lang, langs, AVAILABLE_LANG } from "../lang/root.lang";
import { AVAILABLE_THEME, Theme, themes } from "../theme/root.theme";
import { css } from "@emotion/react";

export default function Hero() {
  const lang: Lang = useSelector((state: RootState) => state.lang);
  const theme: Theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const switchLanguage = (e: React.MouseEvent) => {
    dispatch(
      SET_LANG(
        lang === langs[AVAILABLE_LANG.ES]
          ? AVAILABLE_LANG.EN
          : AVAILABLE_LANG.ES
      )
    );
  };

  const switchTheme = (e: React.MouseEvent) => {
    dispatch(
      SET_THEME(
        theme === themes[AVAILABLE_THEME.DARK]
          ? AVAILABLE_THEME.LIGHT
          : AVAILABLE_THEME.DARK
      )
    );
  };

  return (
    <div data-testid="hero_container">
      <nav
        css={css`
          background-color: ${theme.background};
          width: 100%;
        `}
      >
        <button onClick={switchLanguage}>Language</button>
        <button onClick={switchTheme}>Theme</button>
      </nav>
      <Logo />
      <p>{lang.Home.Hero.Subtitle}</p>
    </div>
  );
}
