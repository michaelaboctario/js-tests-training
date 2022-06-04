function computeClosestToZero(ts) {
  let minVal = 0;
  if( ts.length > 0) {
      minVal = ts[0];
  };
  ts.forEach( function(el) {
      let elem = Number(el);
      if( Math.abs(elem) < Math.abs(minVal) )
      {
          minVal = elem;
      }
      else if((Math.abs(elem) === Math.abs(minVal)) && elem > 0)
      {
          minVal = elem;
      }
  }) ;
  return minVal;
}

  module.exports = computeClosestToZero;