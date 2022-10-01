import isValid from "../src/reto3";
import { describe, expect, it } from "vitest";

describe("isValid", () => {
  it("should be a function", () => {
    expect(typeof isValid).toBe("function");
  });

  it("should return boolean", () => {
    expect(isValid("a")).toBeTypeOf("boolean");
  });

  it("should throw error if parameter is not a string", () => {
    expect(() => isValid(2)).toThrow("parameter must be a string");
  });

  it("should throw error if parameter is empty string", () => {
    expect(() => isValid("")).toThrow(
      "parameter must contain at least one character"
    );
  });

  it("should return false if contains '[' or '{'", () => {
    expect(isValid("(peluche {) bici")).toBe(false);
  });

  it("should validate if '(' has its correct closing ')'", () => {
    expect(isValid("(colores")).toBe(false)
  });

  it("should validate if '(' has its correct closing ')'", () => {
    expect(isValid("(colores)")).toBe(true)
  });

  it("should detect if the parenthesis contains characters inside")
  {
    expect(isValid("()")).toBe(false)
  }
  
  it("should detect if the character inside the parenthesis is different from a parenthesis")
  {
    expect(isValid("(())")).toBe(false)
  }
});
