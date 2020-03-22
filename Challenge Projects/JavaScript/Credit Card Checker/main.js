// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// create strings of card numbers in batc array
let creditArrayString = [];

//creates a string for each card number array
function credToString(credArray) {
  for (let i = 0; i < credArray.length; i++) {
    creditArrayString.push(credArray[i].join(''));
  }
  return creditArrayString;
}

//check card array & return true if valid / false if invalid
function validateCred(cardArray) {
  let total = 0;
  for (let i = cardArray.length - 1; i >= 0; i--) {
    let changeSum = cardArray[i];
    if (((cardArray.length - i) % 2) == 0) {
      changeSum *= 2;
      if (changeSum > 9) {
        changeSum -= 9;
      }
    };
    total += changeSum;
  }
  if ((total % 10) !== 0) {
    return false;
  } else {
    return true;
  }
}

//returns an array of card #s as strings as valid or invalid & an array of invalid cards
function findInvalidCards(arrayOfCards) {
  let validatedCards = [];
  let invalidCards = [];
  credToString(arrayOfCards)
  for (let i = 0; i < arrayOfCards.length; i++) {
    if (validateCred(arrayOfCards[i]) === false) {
      validatedCards.push(`Card #${i+1} (${creditArrayString[i]}) is invalid.`);
      invalidCards.push(arrayOfCards[i]);
    } else {
      validatedCards.push(`Card #${i+1} (${creditArrayString[i]}) is valid.`);
    }
  }
  return [validatedCards, invalidCards];
};

//create arrays for all cards and invalid cards
var validate = findInvalidCards(batch);
var allCardsValidated = validate[0];
var invalid = validate[1];

//find card company from card number
function idInvalidCardCompanies(invalidArray) {
  let visa, amex, mc, dis;
  let invalidCompanies = [];
  for (var i = 0; i < invalidArray.length; i++) {
    if (invalidArray[i][0] === 4) {
      visa = true;
    } else if (invalidArray[i][0] === 3) {
      amex = true;
    } else if (invalidArray[i][0] === 5) {
      mc = true;
    } else if (invalidArray[i][0] === 6) {
      dis = true;
    } else {
      console.log("Company not found.");
    }
  }
  if (visa === true) {
    invalidCompanies.push('Visa');
  }
  if (amex === true) {
    invalidCompanies.push('American Express');
  }
  if (mc === true) {
    invalidCompanies.push('Mastercard');
  }
  if (dis === true) {
    invalidCompanies.push('Discover');
  }
  return invalidCompanies;
};

//final fx to return each array requested
function finalFunction() {
  console.log('Array of all cards in batch array as strings and if they are valid or not: \n', allCardsValidated);
  console.log(' \nArray of each invalid card array: \n', invalid);
  console.log(' \nArray of all companies with invalid cards: ', idInvalidCardCompanies(invalid));
};

finalFunction();

// Below are the extensions

//convert credit card string to array
const numToArray = (credNum) => {
  let creditCardArray = credNum.split("");
  return creditCardArray;
}

let cardArray43 = numToArray('4685978563214565871');
console.log(' \ncard #43\'s array: \n', cardArray43);
//

//convert invalid number to check digit
function createCheckDig(cardArray) {
  let total = 0;
  let checkDig;
  for (let i = cardArray.length - 2; i >= 0; i--) {
    let changeSum = cardArray[i];
    if (((cardArray.length - i) % 2) == 0) {
      changeSum *= 2;
      if (changeSum > 9) {
        changeSum -= 9;
      }
    };
    total += changeSum;
  }
  checkDig = total * 9;
  checkDig = checkDig % 10;
  return checkDig;
}

//return valid number from invalid number by swapping last digit with check digit
function convertToValid(cardArray) {
  let fixedArray = cardArray.slice(0, cardArray.length - 1);
  let replaceDig = createCheckDig(cardArray);
  fixedArray.push(replaceDig);
  return fixedArray;
};

console.log(' \nThe corrected card number is: \n', convertToValid(invalid5));
