import { describe, expect, it } from "vitest";
import { contarOvejas } from "../src/reto1";

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

describe("contarOvejas", () => {
  it("should be a function", () => {
    expect(contarOvejas).toBeTypeOf("function");
  });

  it("should throw an error if the parameter is not an Array", () => {
    expect(() => contarOvejas(2)).toThrow("Parameter must be an Array");
  });

  it("should throw an error if the parameter is empty", () => {
    expect(() => contarOvejas([])).toThrow(
      "Parameter must contain at least one element"
    );
  });

  it("shoul filter the parameters when name contains N & A", () => {
    expect(contarOvejas(ovejas)).toStrictEqual([
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ]);
  });
});
