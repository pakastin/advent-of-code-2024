// parse data
const data = await Deno.readTextFile("data.txt");
const lines = data.split("\n").map((line) => {
  return line.split("   ").map((val) => Number(val));
});

// split to two arrays
const arrayA = lines.map(([a, b]) => a);
const arrayB = lines.map(([a, b]) => b);

// sort both arrays
arrayA.sort();
arrayB.sort();

// calculate distances
const distances = [];
for (let i = 0; i < arrayA.length; i++) {
  const a = arrayA[i];
  const b = arrayB[i];

  distances.push(Math.abs(a - b));
}

// calculate sum of distances
const sum = distances.reduce((sum, num) => {
  sum += num;
  return sum;
}, 0);

// print out result
console.log(sum);
