import { describe, expect, it } from "vitest";
import contains from "../src/reto7";

describe("contains", () => {
  it("Has to be a function", () => {
    expect(typeof contains).toBe("function");
  });

  it("Should receive an object literal", () => {
    expect(() => contains([], "coca-cola")).toThrow(
      "Parameter must be an object"
    );
  });

  it("Should return a boolean", () => {
    expect(contains({}, "coca-cola")).toBeTypeOf("boolean");
  });

  it("Should receive an string as second parameter", () => {
    expect(() => contains({}, 2)).toThrow("Second parameter must be a string");
  });

  it("Should return true if the second parameter is contained in any place of the first parameter", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta",
        },
      },
    };

    expect(contains(almacen, "camiseta")).toBe(true);
  });
});
