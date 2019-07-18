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
      let s2 = start;
      start = end;
      end = s2;
    }
    return number >= start && number < end;
  }
};
// Do not write or modify code below this line.
module.exports = _;
