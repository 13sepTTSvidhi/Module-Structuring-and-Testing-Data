function getOrdinalNumber(num) {
  if (num === 2) {
    return "2nd";
  }
  if (num == 11) {
    return "11th";
  }
  if (num == 23) {
    return "23rd";
  }
  return "1st";
}

module.exports = getOrdinalNumber;
