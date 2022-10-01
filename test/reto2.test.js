import { describe, expect, it } from "vitest";
import { listGifts } from "../src/reto2";

describe("listGifts", () => {
  it("should be a function", () => {
    expect(typeof listGifts).toBe("function");
  });

  it("should return an object", () => {
    expect(listGifts("a")).toBeTypeOf("object");
  });

  it("should take a string", () => {
    expect(() => listGifts(0)).toThrow("parameter must be a string");
  });

  it("should detect empty string", () => {
    expect(() => listGifts("")).toThrow(
      "parameter must contain at least one character"
    );
  });

  it("should word count", () => {
    expect(listGifts("casa")).toStrictEqual({
      casa: 1,
    });
  });
  it("should remove whitespaces at start", () => {
    expect(listGifts("  casa")).toEqual({ casa: 1 });
  });

  it("should split into spaces", () => {
    const carta = "bici coche balón playstation bici coche peluche";
    expect(listGifts(carta)).toEqual({ bici : 2, coche: 2, 'balón' : 1, playstation: 1, peluche: 1 })
  });

  it("should delete the word after the '_'", () => {
    const carta = "bici coche balón _playstation bici coche peluche";
    expect(listGifts(carta)).toEqual({ bici : 2, coche: 2, 'balón' : 1, peluche: 1 })
  });
});
