import React from "react";
import catImage from "../assets/katt.png";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Välkommen till djuraffären.</h1>
        <img src={catImage} alt="Katt" />
        <p>Här kan du titta på vårt djurutbud och köpa djur.</p>
      </div>
    </>
  );
};

export default HomePage;
