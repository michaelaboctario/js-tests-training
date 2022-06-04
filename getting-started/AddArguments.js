function addArguments() {
    let sum = 0;
    //console.log(typeof arguments)
    for (const item of arguments) {
      sum += item;
    }
    return sum;
  }

  module.exports = addArguments;