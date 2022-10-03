export default function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  if(typeof times !== 'number') throw new Error("Parameter must be a number");

  const entradaN = 12*times;

  let entradaF = 250
  for(let i = 1 ; i <= times; i++) {
    entradaF += 12 * (Math.pow(0.75, i))
  }

  return entradaF < entradaN ? true : false;
}