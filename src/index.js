module.exports = function getZerosCount(number) {

  
  
    let counter = 0, m=5;
    while (m<number) {
      counter += Math.floor(number/m);
      m*=5;
    }
    return counter;
  }

  