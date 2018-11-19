import React from 'react';
import { TemperatureCalculator } from "./TemperatureCalculator";
import pines from "./10p.png"

export const App = () => (
  <div>
    <TemperatureCalculator/>
    <img src={ pines } className={`ten-pines-logo`} alt="10pines"/>
  </div>
);
