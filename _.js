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
  }
};
// Do not write or modify code below this line.
module.exports = _;
