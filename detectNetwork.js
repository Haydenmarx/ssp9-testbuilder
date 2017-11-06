// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber[0] === '3') {
    if (cardNumber.length === 14 && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
      return "Diner's Club";
    } else if (cardNumber.length === 15 && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
      return "American Express";
    }
  } else if (cardNumber[0] === '4') {
    if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && 
       (cardNumber.slice(1,4) === '903' || 
        cardNumber.slice(1,4) === '905' || 
        cardNumber.slice(1,4) === '911' || 
        cardNumber.slice(1,4) === '936')
       ) {
      return "Switch";
    } else if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return "Visa";
    }
  } else if (cardNumber[0] === '5') {
    // 564182, 
    if (cardNumber.slice(1,6) === '64182' && (cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19)) {
      return "Switch";
    }
    // and a length of 16, 18, or 19.
    if (cardNumber[1] === '0' && (cardNumber.slice(2,4) === '18' || cardNumber.slice(2,4) === '20' || cardNumber.slice(2,4) === '38') && (cardNumber.length > 11 && cardNumber.length < 20)) {
      return "Maestro";
    } else if (cardNumber.length === 16 && (Number(cardNumber[1]) > 0 && Number(cardNumber[1]) < 6)) {
      return "MasterCard";
    }
  } else if (cardNumber[0] === '6') {
    if (cardNumber.slice(1,4) === '304' && (cardNumber.length > 11 && cardNumber.length < 20)) {
      return "Maestro";
      //6 2 44567890123456
      //6 2 44567890123456
    } else if (cardNumber[1] === "2" && 
                (Number(cardNumber.slice(2,6)) > 2125 || 
                 Number(cardNumber.slice(2,6)) < 2926 || 
                 Number(cardNumber[2]) > 3 || 
                 Number(cardNumber[2]) < 7 ||
                 Number(cardNumber.slice(2,4)) > 81 ||
                 Number(cardNumber.slice(2,4)) < 89 ||
                 Number(cardNumber[2]) > 3 ||
                 Number(cardNumber[2]) < 7 ) &&
              (cardNumber.length > 15 && cardNumber.length < 20)
              ) {
      // console.log(`p: ${cardNumber.slice(0,4)} l: ${cardNumber.length}`)
      return "China UnionPay";
    } else if ((cardNumber.slice(1,6) === '33110' || cardNumber.slice(1,4) === '333' || cardNumber.slice(1,4) === '759') && 
    (cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19)) {
      return "Switch";
    } else if (
      (cardNumber.length > 15 && cardNumber.length < 20) && 
      (cardNumber[1] === '5' || cardNumber.slice(1,4) === '011' || Number(cardNumber.slice(1,3)) > 43 || Number(cardNumber.slice(1,3)) < 66)
     ) {
    return "Discover";
    } 
  }
  return 'No result';
};

/*
China UnionPay : 622126-622925, 
                 624-626, 
                 6282-6288 
                 and a length of 16-19.

Switch : 4903, 4905, 4911, 4936, 
         564182, 
         633110, 6333, 6759 
         and a length of 16, 18, or 19.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, 
you should choose the network with the longer prefix.
*/