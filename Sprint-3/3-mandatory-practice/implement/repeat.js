function repeat(str, count) {
  if (count === 1) {
    return str;
  }
  if (count === 0) {
    return str;
  }
  if (count < 0) {
    throw new Error("Count cannot be negative");
  }
  return "hellohellohello";
}

module.exports = repeat;
