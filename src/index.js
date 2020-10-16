module.exports = function reverse (n) {
    let number = parseFloat(n.toString().split('').reverse().join(''));
    return number;
  }