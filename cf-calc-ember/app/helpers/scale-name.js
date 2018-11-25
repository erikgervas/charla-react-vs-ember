import { helper } from '@ember/component/helper';

export function scaleName([scaleLetter]) {
  switch (scaleLetter) {
    case 'c':
      return 'Celsius';
    case 'f':
      return 'Fahrenheit';
    default:
        return 'Unknown'
  }
}

export default helper(scaleName);
