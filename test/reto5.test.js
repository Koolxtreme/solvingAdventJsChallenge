import { describe, expect, it } from "vitest";
import daysToXmas from "../src/reto5";

describe("daysToXmas", () => {
  it("has to be a function", () => {
    expect(typeof daysToXmas).toBe("function");
  });

  it("should receive date as parameter", () => {
    expect(() => daysToXmas(1)).Throw("Invalid date format");
  });

  it("should return an interger", () => {
    const date = new Date();
    expect(daysToXmas(date)).toBeTypeOf("number");
  });

  it("Should count the number of days to reach december 25th", () => {
    const date = new Date("December 20, 2021 03:24:00");
    expect(daysToXmas(date)).toBe(5);
  });

  it("Should return negative if the date exceeds christmas", () => {
    const date = new Date('Jan 1, 2022 00:00:01');
    expect(daysToXmas(date)).toBe(-7);
  });
});
