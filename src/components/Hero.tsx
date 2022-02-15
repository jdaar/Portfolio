/** @jsxImportSource @emotion/react */

import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/types";
import { SET_LANG, SET_THEME } from "../store/store";
import { Lang, langs, AVAILABLE_LANG } from "../lang/root.lang";
import { AVAILABLE_THEME, Theme, themes } from "../theme/root.theme";
import { css } from "@emotion/react";
import React from "react";

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
    <div
      data-testid="hero_container"
      css={css(`
          padding: 0;
          margin: 0;
          background-color: ${theme.background};
          width: 100%;
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        `)}
    >
      <nav
        css={css(`
        width: 100%;
        min-height: 3em;
        display: flex;
        justify-content: right;
        z-index: 2;
      `)}
      >
        <div
          data-testid="state_buttons_container"
          css={css(`
            display: flex;
            width: 5em;
            align-items: center;
            justify-content: space-between;
            margin-left: 3em;
          `)}
        >
          <button
            onClick={switchLanguage}
            css={css(`background: none; border: none; font-size: 1.5em;`)}
          >
            {lang === langs[AVAILABLE_LANG.EN] ? "🇨🇴" : "🇺🇸"}
          </button>
          <button
            onClick={switchTheme}
            css={css(`background: none; border: none; font-size: 1.2em;`)}
          >
            {theme === themes[AVAILABLE_THEME.DARK] ? "☀️" : "🌙"}
          </button>
        </div>
        <div
          data-testid="links_container"
          css={css(`
          width: 15em;
          display: flex;
          margin-left: 3em;
          margin-right: 3em;
          justify-content: space-between;
          align-items: center;
          color: ${theme.secondary_color}
        `)}
        >
          <a
            href="#placeholder"
            css={css(`
              color: ${theme.secondary_color};
              text-decoration: none;
            `)}
          >
            {lang.Home.Hero.Links.Projects}
          </a>
          <a
            href="#placeholder"
            css={css(`
              color: ${theme.secondary_color};
              text-decoration: none;
            `)}
          >
            {lang.Home.Hero.Links.AboutMe}
          </a>
        </div>
      </nav>
      <div
        className="logo"
        css={css(`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        padding: 5em;
        margin-top: 2em;
        padding-top: 3em;
      `)}
      >
        <div
          className="front-logo"
          css={css(`
          z-index: 1;
          transform: scale(150%);
        `)}
        >
          <Logo color={theme.primary_color} />
        </div>
        <div
          className="back-logo"
          css={css(`
          position: absolute;
          transform: scale(500%);
          z-index: 0;
        `)}
        >
          <Logo
            color={theme.detail_color}
            css={css(`
              position: absolute;
              top: 0;
              left: 0;
              height: 40vh;
        `)}
          />
        </div>
        <h2
          css={css(`
        color: ${theme.secondary_color};
        z-index: 1;
      `)}
        >
          {lang.Home.Hero.Subtitle}
        </h2>
      </div>
    </div>
  );
}
