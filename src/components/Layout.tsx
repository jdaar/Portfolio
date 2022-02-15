/** @jsxImportSource @emotion/react */

import { useSelector } from "react-redux";
import { RootState } from "../store/types";
import { Theme } from "../theme/root.theme";
import { css, Global } from "@emotion/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme: Theme = useSelector((state: RootState) => state.theme);

  return (
    <div data-testid="main_container">
      <Global
        styles={css(`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

        html, body {
            font-family: 'Montserrat', sans-serif;
            padding: 0;
            margin: 0;
            background-color: ${theme.secondary_background};
            overflow-x: hidden;
            height: 100%;
        }
      `)}
      ></Global>
      {children}
    </div>
  );
}
