// read data
const data = (await Deno.readTextFile("./data.txt")).split("\n");

let count = 0;

// go through all cells
for (let y = 0; y < data.length; y++) {
  for (let x = 0; x < data[y].length; x++) {
    const char = data[y][x];
    // if character is A, check all directions for MAS and SAM
    if (char === "A") {
      count += check(data, x, y);
    }
  }
}

// print out result
console.log(count);

function check(data, x, y) {
  const topleft = data[y - 1]?.[x - 1];
  const topright = data[y - 1]?.[x + 1];
  const bottomleft = data[y + 1]?.[x - 1];
  const bottomright = data[y + 1]?.[x + 1];

  if (
    (topleft === "S" && bottomright === "M") ||
    (topleft === "M" && bottomright === "S")
  ) {
    if (
      (topright === "S" && bottomleft === "M") ||
      (topright === "M" && bottomleft === "S")
    ) {
      return 1;
    }
  }
  return 0;
}