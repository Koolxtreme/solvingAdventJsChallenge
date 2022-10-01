import { describe, expect, it } from "vitest";
import sumPairs from "../src/reto6";

describe("sumPairs", () => {
  it("Has to be a function", () => {
    expect(typeof sumPairs).toBe("function");
  });

  it("The first parameter should to be an array", () => {
    expect(() => sumPairs(1, 2)).toThrow("First parameter must be an array");
  });

  it("The second parameter should be a number", () => {
    expect(() => sumPairs([], "2")).toThrow(
      "Second parameter must be a number"
    );
  });

  it("The first parameter should contain number into the array", () => {
    expect(() => sumPairs([1, 2, 3, "2"], 1)).toThrow("Enter a valid array");
  });

  it("Should return an array", () => {
    expect(Array.isArray(sumPairs([1, 2, 3], 3))).toBe(true);
  });

  it("Should match the given array with the result", () => {
    expect(sumPairs([1, 2, 3], 3)).toEqual([1, 2]);
  });

  it("Should answer with the first pair", () => {
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2]);
  });
});
