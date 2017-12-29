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

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let DriverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
