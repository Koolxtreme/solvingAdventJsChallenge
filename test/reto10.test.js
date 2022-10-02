import { describe, expect, it } from "vitest";
import getCoins from "../src/reto10";

describe("getCoins", () => {
  it("Has to be a function", () => expect(typeof getCoins).toBe("function"));

  it("Should take a number as parameter", () => {
    expect(() => getCoins("1")).toThrow("Parameter must be a number");
    expect(() => getCoins([1])).toThrow("Parameter must be a number");
  });

  it("Should return an array", () => {
    expect(Array.isArray(getCoins(28))).toBe(true);
  });

  it("Should count how mani coins has to be returned", () => {
    expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0]);
  });
});
