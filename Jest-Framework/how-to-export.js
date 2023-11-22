function getOrdinalNumber(num) {
  let NumStr = num.toString();
  let lastNum = NumStr[NumStr.length - 1];
  if ((num > 10 && num != 11 && Number(lastNum) == 1) || num == 1) {
    return `${num}st`;
  } else {
    return `${num} is not equal to 1 or its last digit is not equal to 1, or num is equal to 11`;
  }
}

function testing(result) {
  return result;
}

module.exports = { getOrdinalNumber, testing };
// module.exports = getOrdinalNumber;
// module.exports = testing;
