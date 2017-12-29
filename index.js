function produceDrivingRange(range) {
  return function(start, stop){
    let blocks = parseInt(stop) - parseInt(start)

    if(range - blocks > 0){
      return `within range by ${range - blocks}`
    } else {
      return `${Math.abs(range - blocks)} blocks out of range`
    }
  }
}

function produceTipCalculator() {
  
}