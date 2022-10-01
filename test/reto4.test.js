import { describe, expect, it } from "vitest";
import createXmasTree from "../src/reto4";

describe("createXmasTree", () => {
  it("should be a function", () => {
    expect(typeof createXmasTree).toBe("function");
  });

  it("should return a string", () => {
    expect(createXmasTree(1)).toBeTypeOf("string");
  });

  it("should take a number as parameter", () => {
    expect(() => createXmasTree("casa")).toThrow("parameter must be a number");
  });

  it("parameter should be between 1 and 100", () => {
    expect(() => createXmasTree(0)).toThrow(
      "parameter must be between 1 and 100"
    );
  });

//   it("should to always have a base", () => {
//     expect(createXmasTree(1)).toBe("#\n#");
//   });
  it("should to return a tree", () => {
    expect(createXmasTree(2)).toBe("_*_\n***\n_#_\n_#_");
  });
});
