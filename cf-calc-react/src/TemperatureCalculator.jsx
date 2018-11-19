import React from "react"
import { TemperatureInput } from "./TemperatureInput";

export class TemperatureCalculator extends React.Component{

  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'}
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
    return (fahrenheit - 32) * 5 / 9;
  };

  aFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.aCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.aFahrenheit) : temperature;

    return(
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
      </div>
    );
  }
}