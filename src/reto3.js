export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  if (typeof letter !== "string") throw new Error("parameter must be a string");
  if (!letter) throw new Error("parameter must contain at least one character");

  if (letter.includes("{") || letter.includes("[")) return false;

  if (letter.includes("(") && !letter.includes(")")) return false;

  for (let i = 0; i < letter.length; i++) {
    if( letter[i] === "(" && letter[i+1] === "(" || letter[i] === "(" && letter[i+1] === ")")
    return false;
    if( letter[i] === ")" && letter.lastIndexOf("(", i) === -1) return false;
  }

  return true;
}