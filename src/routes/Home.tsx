import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";

export default function Home(): React.ReactElement {
  return (
    <div>
      <Layout>
        <Hero />
        <AboutMe />
      </Layout>
    </div>
  );
}
