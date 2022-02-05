import React from "react";
import { render, cleanup } from "@testing-library/react";
import Hero from "../../components/Hero";
import { LANG_ES } from "../../lang/es";

describe("Component<Hero>", () => {
  test("Get main text", () => {
    const heroComponent = render(<Hero lang={LANG_ES} />);
    expect(heroComponent.getByTestId("hero_container")).toHaveTextContent(
      LANG_ES.Home.Hero.Subtitle
    );
  });
});
