import React from "react";
import { SocialNetworks } from "./components/socialNetworks/SocialNetworks";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Counter } from "./components/counter/Counter";

export const App = () => {
  return (
    <>
      <NavBar />
      <SocialNetworks />
      <Counter initialValue={100} increment={10} decrement={10} /> 
      <Counter initialValue={0} increment={10} /> 
      <Footer />
    </>
  );
};
