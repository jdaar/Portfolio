/** @jsxImportSource @emotion/react */

import { useSelector } from "react-redux";
import { RootState } from "../store/types";
import { Theme } from "../theme/root.theme";
import { css } from "@emotion/react";
import { Lang } from "../lang/root.lang";

export default function AboutMe() {
  const lang: Lang = useSelector((state: RootState) => state.lang);
  const theme: Theme = useSelector((state: RootState) => state.theme);

  return (
    <div data-testid="about_me_container">
      <div
        css={css(`
        position: relative;
        height: 13em;
      `)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          css={css(`position: absolute; top: 0; left: 0;`)}
        >
          <path
            fill={theme.background}
            d="m0 64 80-5.3C160 53 320 43 480 53.3 640 64 800 96 960 101.3c160 5.7 320-16.3 400-26.6l80-10.7V0H0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          css={css(
            `position: absolute; top: -25px; left: 0; transform: scale(200%) translate(0%, 5%)`
          )}
        >
          <path
            d="m0 192 80-21.3c80-21.8 240-63.7 400-69.4 160-5.3 320 26.7 480 16 160-10.3 320-64.3 400-90.6L1440"
            css={css(`stroke: ${theme.secondary_color}; fill: none;`)}
          ></path>
        </svg>
      </div>
      <div
        data-testid="about_me_main_content"
        css={css(`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.secondary_color}
      `)}
      >
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScK-ft-0ERwFDtKvvgeYBLuHMph97kWp7uKad8nq_hrR72Zgg/viewform" width="800" height="2000" css={css(`margin-bottom: 100px; border-radius: 10px; border: none;`)}>Cargando…</iframe>
      </div>
    </div>
  );
}
