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
    if(number >= start && number < end){
      return true;
    } else{
      return false;
    }
  }
};
// Do not write or modify code below this line.
module.exports = _;
