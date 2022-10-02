export default function contains(store, product) {
  if (typeof store !== "object" || store === null || Array.isArray(store))
    throw new Error("Parameter must be an object");
  if (typeof product !== "string")
    throw new Error("Second parameter must be a string");

  let isValid = false;

  const validate = (item) => {
    if (!isValid && typeof item === "string") {
      if (item === product) {
        isValid = true;
      }
    }
    if (
      (!isValid && typeof item === "object" && item !== null) ||
      Array.isArray(item)
    ) {
      Object.values(item).forEach((value) => {
        validate(value);
      });
    }
  };
  validate(store);

  return isValid;
}
