const data = (await Deno.readTextFile("./data.txt")).split("\n");

const directions = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

let count = 0;

for (let y = 0; y < data.length; y++) {
  for (let x = 0; x < data[y].length; x++) {
    const char = data[y][x];
    if (char === "X") {
      for (const direction of directions) {
        count += checkDirection(data, x, y, direction);
      }
    }
  }
}

console.log(count);

function checkDirection(data, x, y, [vx, vy]) {
  let traverse = data[y][x];
  let buffer = "";

  while (traverse) {
    buffer += traverse;
    if (!"XMAS".startsWith(buffer)) {
      return 0;
    }
    if (buffer.length === 4) {
      return 1;
    }
    x += vx;
    y += vy;
    traverse = data[y]?.[x];
  }
  return 0;
}
