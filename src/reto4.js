export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  if (typeof height !== "number") throw new Error("parameter must be a number");
  if (height < 1 || height > 100)
    throw new Error("parameter must be between 1 and 100");
  let treeSqueleto = [];
  const finalLength = 2 * height - 1;

  for (let i = 1; i <= height; i++) {
    let word = "";
    if (finalLength > 1) {
      const currentLength = 2 * i - 1;
      word += "_".repeat((finalLength - currentLength) / 2);
      word += "*".repeat(currentLength);
      word += "_".repeat((finalLength - currentLength) / 2);
    } else {
      word += "*";
    }
    treeSqueleto.push(word);
  }

  for (let i = 0; i < 2; i++) {
    if (finalLength > 1) {
      let word = "";
      word += "_".repeat((finalLength - 1) / 2);
      word += "#";
      word += "_".repeat((finalLength - 1) / 2);
      treeSqueleto.push(word);
    } else {
      treeSqueleto.push("#");
    }
  }
  let tree = treeSqueleto.join("\n");
  return tree;
}
