import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  scaleName: computed(function (scaleLetter) {
    switch (scaleLetter) {
      case 'c':
        return 'Celsius';
      case 'f':
        return 'Fahrenheit';
    }
  })
});
