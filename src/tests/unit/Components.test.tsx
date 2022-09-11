import React from "react";
import { render, cleanup } from "@testing-library/react";
import Hero from "../../components/Hero";
import { LANG_ES } from "../../lang/es.lang";

describe("Component<Hero>", () => {
  test("Get main text", () => {
    const heroComponent = render(<Hero />);
    expect(heroComponent.getByTestId("hero_container")).toHaveTextContent(
      LANG_ES.Home.Hero.Subtitle
    );
  });
});
