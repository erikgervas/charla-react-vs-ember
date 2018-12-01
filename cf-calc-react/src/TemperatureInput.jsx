import React from "react"

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export const TemperatureInput = (props) => (

    <fieldset className={`input-box`}>
      <legend>Enter temperature in { scaleNames[ props.scale ] }:</legend>
      <input value={ props.temperature }
             onChange={ (e) => props.onTemperatureChange(e.target.value, props.scale) }
             className={ `temperature-input` }/>
    </fieldset>
);
