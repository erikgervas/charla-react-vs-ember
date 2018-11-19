import React from "react"
import { TemperatureInput } from "./TemperatureInput";
import arrows from "./bidirectional-arrows-black-fat.png"
import "./App.css"

export class TemperatureCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' }
  }

  tryConvert = (temperature, converter) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const convertedTemperature = converter(input);
    const rounded = Math.round(convertedTemperature * 1000) / 1000;
    return rounded.toString();
  };

  aCelsius = (fahrenheit) => {
    return ( fahrenheit - 32 ) * 5 / 9;
  };

  aFahrenheit = (celsius) => {
    return ( celsius * 9 / 5 ) + 32;
  };

  handleCelsiusChange = (temperature) => {
    this.setState({ temperature, scale: 'c' });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ temperature, scale: 'f' });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.aCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.aFahrenheit) : temperature;

    return (
      <div>
        <h1 className={`title`}>Temperature Calculator</h1>
        <div className={ `calculator` }>
          <TemperatureInput
            scale="c"
            temperature={ celsius }
            onTemperatureChange={ this.handleCelsiusChange }/>
          <img src={ arrows } className={ `arrows` } alt="arrows"/>
          <TemperatureInput
            scale="f"
            temperature={ fahrenheit }
            onTemperatureChange={ this.handleFahrenheitChange }/>
        </div>
      </div>
    );
  }
}