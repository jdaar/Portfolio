import React from "react";
import Hero from "../components/Hero";
import { Lang } from "../lang/lang";

export default function Home({ lang }: { lang: Lang }) {
  return (
    <div>
      <Hero lang={lang} />
    </div>
  );
}
