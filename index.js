function produceDrivingRange(range) {
  return function(start, stop){
    let blocks = parseInt(start) - parseInt(stop)
    if(range - blocks > 0){
      return `${range - blocks} blocks out of range`
    } else {
      return `${range - blocks} blocks out of range`
    }
  }
}

// - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.
