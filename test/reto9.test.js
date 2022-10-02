import { describe, expect, it } from "vitest";
import groupBy from "../src/reto9";

describe("groupBy", () => {
  it("Has to be a function", () => {
    expect(typeof groupBy).toBe("function");
  });

  it("Has to take an array as parameter", () => {
    expect(() => groupBy("banano", "banano")).toThrow(
      "First parameter must be an array"
    );
  });

  it("Should return error if array is empty", () => {
    expect(() => groupBy([], "banano")).toThrow("Array cannot be empty");
  });

  it("Should take a string or function as second parameter", () => {
    expect(() => groupBy([1, 2, 3], [4, 5, 6])).toThrow(
      "The second parameter must be a string or function"
    );
  });

  it("Should return an object", () => {
    expect(groupBy([6.3, 7.2, 4.4], Math.floor)).toBeTypeOf("object");
  });

  it("Should group array by string or function", () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      6: [6.1, 6.3],
      4: [4.2],
    });

    expect(groupBy(["one", "two", "three"], "length")).toEqual({
      3: ["one", "two"],
      5: ["three"],
    });

    expect(
      groupBy([1397639141184, 1363223700000], (timestamp) =>
        new Date(timestamp).getFullYear()
      )
    ).toEqual({ 2013: [1363223700000], 2014: [1397639141184] });
  });

  expect(
    groupBy(
      [
        { title: "JavaScript: The Good Parts", rating: 8 },
        { title: "Aprendiendo Git", rating: 10 },
        { title: "Clean Code", rating: 9 },
      ],
      "rating"
    )
  ).toEqual({
    8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
    9: [{ title: "Clean Code", rating: 9 }],
    10: [{ title: "Aprendiendo Git", rating: 10 }],
  });
});
