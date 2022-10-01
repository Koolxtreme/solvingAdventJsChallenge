export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  if (!Array.isArray(numbers))
    throw new Error("First parameter must be an array");
  if (typeof result !== "number")
    throw new Error("Second parameter must be a number");
  numbers.forEach((valor) => {
    if (typeof valor !== "number") throw new Error("Enter a valid array");
  });

  let sol = [];

  for (let i = 0; i < numbers.length; i++) {
    if (sol.length < 2) {
      for (let j = 0; j < numbers.length; j++) {
        if (i !== j) {
          if (numbers[i] + numbers[j] === result) {
            sol.push(numbers[i]);
            sol.push(numbers[j]);
          }
        }
      }
    }
  }

  if (sol.length > 0) return sol;
  return null;
}
