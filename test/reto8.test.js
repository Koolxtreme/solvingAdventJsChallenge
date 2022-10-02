import { describe, expect, it } from "vitest";
import maxProfit from "../src/reto8";

describe("maxProfit", () => {
  it("Has to be a function", () => {
    expect(typeof maxProfit).toBe("function");
  });

  it("Should take an array as parameter", () => {
    expect(() => maxProfit(3)).toThrow("Parameter must be an Array");
  });

  it("The array couldn't be empty", () => {
    expect(() => maxProfit([])).toThrow("The array cannot be empty");
  });

  it("Should return a number", () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    expect(maxProfit(pricesBtc)).toBeTypeOf("number");
  });

  it("Should validate the bigest profit", ()=>
  {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    expect(maxProfit(pricesBtc)).toBe(16);
  });

  it("Should return -1 if the profit is negative or cero", () => {
    const pricesAda = [3, 3, 3, 3, 3];
    const pricesDoge = [18, 15, 12, 11, 9, 7];
    expect(maxProfit(pricesAda)).toBe(-1);
    expect(maxProfit(pricesDoge)).toBe(-1);
  });
});
