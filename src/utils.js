export function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}

export function convertToSixDigits(hex) {
  return hex.length === 3
    ? hex
        .split("")
        .map((x) => x.repeat(2))
        .join("")
    : hex;
}

export function hexSimilarity(hex1, hex2) {
  hex1 = hex1.replace("#", "");
  hex2 = hex2.replace("#", "");

  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const diff = calculateDiff(rgb1, rgb2);

  const similarityPercentage = 100 - (diff / Math.sqrt(3 * 255 * 255)) * 100;

  return Math.round(similarityPercentage);
}

function hexToRgb(hex) {
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

function calculateDiff(rgb1, rgb2) {
  // Calculate the Euclidean distance between two RGB colors
  const dr = rgb2.r - rgb1.r;
  const dg = rgb2.g - rgb1.g;
  const db = rgb2.b - rgb1.b;

  return Math.sqrt(dr * dr + dg * dg + db * db);
}
