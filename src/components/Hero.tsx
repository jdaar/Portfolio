import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AVAILABLE_LANG } from "../store/types";
import { SET_LANG } from "../store/store";
import { Lang, langs } from "../lang/root.lang";

export default function Hero() {
  const lang: Lang = useSelector((state: RootState) => state.lang);
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

  return (
    <div data-testid="hero_container">
      <nav>
        <button onClick={switchLanguage}>English</button>
      </nav>
      <Logo />
      <p>{lang.Home.Hero.Subtitle}</p>
    </div>
  );
}
