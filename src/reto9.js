export default function groupBy(collection, it) {
  if (!Array.isArray(collection))
    throw new Error("First parameter must be an array");
  if (!collection.length) throw new Error("Array cannot be empty");
  if (typeof it !== "function" && typeof it !== "string")
    throw new Error("The second parameter must be a string or function");

  const sol = {};

  for (const value of collection) {
    const key = typeof it === "function" ? it(value) : value[it];

    key in sol ? sol[key].push(value) : (sol[key] = [value]);
  }
  return sol;
}