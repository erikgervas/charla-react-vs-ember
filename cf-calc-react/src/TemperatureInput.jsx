import React from "react"

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export const TemperatureInput = (props) => {

  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset className={`input-box`}>
      <legend>Enter temperature in { scaleNames[ props.scale ] }:</legend>
      <input value={ props.temperature }
             onChange={ handleChange }/>
    </fieldset>
  )
};
