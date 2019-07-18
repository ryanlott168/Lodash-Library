const _ = {
  clamp(num, lower, upper) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end){
    if(!end){
      end = start;
      start = 0;
    }
    if(start > end){
      let temp = start;
      start = end;
      end = temp;
    }
    let isInRange = start<= number && end > number;
    return isInRange;
  },

  words(string){
    return string.split(' ');
  },

  pad(string, length){
    if(string <= length){
      return string;
    } else {
      let paddingAmount = length - string.length;
      let pad = paddingAmount / 2;
      if(paddingAmount % 2 == 1){
        return ' '.repeat(pad) + string + ' '.repeat(pad+1);
      } else {
        return ' '.repeat(pad) + string + ' '.repeat(pad);
      }
    }
  },

  has(object, key){
    return object.hasOwnProperty(key)? true: false;
  },

  invert(object){
    const inverted = {};
    for(let key in object){
      inverted[object[key]] = key;
    }
    return inverted;
  },

  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },

  drop(array, number){
    if(!number){
      number = 1;
    }
    for(let i = 0; i < number; i++){
      array.shift();
    }
    return array;
  }
};
// Do not write or modify code below this line.
module.exports = _;
