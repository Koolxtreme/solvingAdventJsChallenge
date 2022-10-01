export const contarOvejas = (ovejas) => {
  if (!Array.isArray(ovejas)) throw new Error("Parameter must be an Array");
  if (!ovejas.length)
    throw new Error("Parameter must contain at least one element");

  const sol = [];

  for (let obj of ovejas) {
    if (
      obj["name"].toLowerCase().includes("a") &&
      obj["name"].toLowerCase().includes("n") &&
      obj["color"] === "rojo"
    ) {
      sol.push(obj);
    }
  }
  return sol;
};
