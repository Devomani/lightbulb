import React, { useState } from "react";
import "./App.css";
import lightOff from "./component/images/lightOff.jpeg";
import lightOn from "./component/images/lightOn.jpeg";

export const App = () => {
  const [Bulb, setBulb] = useState(false);

  return (
    <div className="App">
      <img src={Bulb ?lightOn : lightOff} alt="bulb-off" />
      <div className="bulb">
        <button onClick={() => setBulb(Bulb === false ? true : true)}>
          Switch On
        </button>
        <button id="buttonOff"  onClick={() => setBulb(Bulb === true ? false : false)}>
          Switch Off
        </button>
      </div>
    </div>
  );
};