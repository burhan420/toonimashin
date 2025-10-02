let i = 1;
while (i <= 20) {
  if (i % 3 && i % 5) {
    console.log("fizzbuzz", i);
  } else if (i % 3) {
    console.log("fizz", i);
  } else {
    console.log("buzz", i);
  }
  i++;
}
