export default function getCoins(change) {
  if (typeof change !== "number") throw new Error("Parameter must be a number");

  const sol = [0,0,0,0,0,0];
  let value = change;

  const monedas = [1, 2, 5, 10, 20, 50];
  for (let i = monedas.length-1; i >= 0; i--) {
    const cuantity = Math.floor(value / monedas[i]);
    if (cuantity >= 1) {
      sol[i] += cuantity;
      value -= cuantity * monedas[i];
    }
  }
  return sol;
}