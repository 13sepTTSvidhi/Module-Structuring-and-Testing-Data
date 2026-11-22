function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true; //Pass the test for proper check
  if (numerator >= denominator) return false; //Pass the test for Improper Fraction check
  if (numerator < denominator) return true; //Pass the test for Negative Fraction check
  if (numerator === denominator) return false; //Pass the test for Equal Numerator and Denominator check
}

module.exports = isProperFraction;
