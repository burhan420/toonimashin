let originalArray = [1, 2, 2, 3, 4, 4];
let i = 0;
let uniqueArray = [];
let count = 0;
while (i < originalArray.length) {
  if (originalArray[i] === 2) {
    count++;
    if (count > 1) {
      originalArray.splice(i, 1); // 2 илүү гарсан тохиолдолд устгана
      continue; // splice хийсэн учир i нэмэхгүйгээр үргэлжлүүлнэ
    }
  }
  i++;
}
console.log(originalArray);
