import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  currentTemperature: '',
  currentScale: 'c',

  celsius: computed('currentTemperature', {
    get() {
      let currentTemperature = this.get('currentTemperature');
      return this.get('currentScale') === 'f' ? this.tryConvert(currentTemperature, this.toCelsius) : currentTemperature;
    },
    
    set(key, temperature) {
      ths.setTemperature(temperature, 'c');
    }
  }),

  fahrenheit: computed('currentTemperature', {
    get() {
      let currentTemperature = this.get('currentTemperature');
      return this.get('currentScale') === 'c' ? this.tryConvert(currentTemperature, this.toFahrenheit) : currentTemperature;
    },

    set(key, temperature) {
      ths.setTemperature(temperature, 'f');
    }
  }),

  setTemperature(temperature, scale) {
    this.set('currentScale', scale);
    this.set('currentTemperature', temperature);
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
