export const listGifts = (letter) => {
  if (typeof letter !== "string") throw new Error("parameter must be a string");

  if (!letter) throw new Error("parameter must contain at least one character");

  const sol = {};
  let palabra = "";
  let newLetter = letter.trim();

  while (true) {
    for (let i = 0; i < newLetter.length; i++) {
      if (newLetter[i] !== " ") {
        palabra += newLetter[i];
      }
      if (newLetter[i] === " " || i === newLetter.length - 1) {
        if (palabra.indexOf("_") == -1) {
          palabra in sol ? (sol[palabra] += 1) : (sol[palabra] = 1);
          palabra = "";
        }
        else
        {
          palabra = ""
        }
      }
    }
    break;
  }
  return sol;
};
