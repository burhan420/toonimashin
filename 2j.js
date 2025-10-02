function leel(string) {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}
console.log(leel("level"));
console.log(leel("adil"));
console.log(leel("madam"));
