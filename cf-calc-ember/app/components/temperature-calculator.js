import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  currentTemperature: '',
  currentScale: 'c',

  celsius: computed('currentScale', 'currentTemperature', function () {
    let currentTemperature = this.get("currentTemperature");
    return this.get("currentScale") === 'f' ? this.tryConvert(currentTemperature, this.toCelsius) : currentTemperature;
  }),

  fahrenheit: computed('currentScale', 'currentTemperature', function () {
    let currentTemperature = this.get("currentTemperature");
    return this.get("currentScale") === 'c' ? this.tryConvert(currentTemperature, this.toFahrenheit) : currentTemperature;
  }),

  actions: {

    handleCelsiusChange(temperature) {
      this.set('currentTemperature', temperature);
      this.set('currentScale', 'c');
    },

    handleFahrenheitChange(temperature) {
      this.set('currentTemperature', temperature);
      this.set('currentScale', 'f');
    },
  },

  tryConvert(temperature, converter) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const convertedTemperature = converter(input);
    const rounded = Math.round(convertedTemperature * 1000) / 1000;
    return rounded.toString();
  },

  toCelsius(fahrenheit) {
    return ( fahrenheit - 32 ) * 5 / 9;
  },

  toFahrenheit(celsius) {
    return ( celsius * 9 / 5 ) + 32;
  },

});
