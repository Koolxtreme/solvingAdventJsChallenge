import { describe, expect, it } from "vitest";
import shouldBuyFidelity from "../src/reto11"

describe("shouldBuyFidelity", () => {
  it("Has to be a function", () => {
    expect(typeof shouldBuyFidelity).toBe("function");
  });

  it("Should receive a number as parameter", () => {
    expect(() => shouldBuyFidelity([])).toThrow("Parameter must be a number");
  });

  it("Should return a boolean", () => {
    expect(typeof shouldBuyFidelity(1)).toBe("boolean");
  });

  it("Should help to know if the investment is good", () => {
    expect(shouldBuyFidelity(3)).toBe(false);
    expect(shouldBuyFidelity(100)).toBe(true);
  });
});