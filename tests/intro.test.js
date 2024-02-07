import { describe, it, test, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the greater value", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the greater value", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if argument is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if argument is divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if argument is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return arg as string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});

describe("factorial", () => {
  it("should return 1 if given 0");
  expect(factorial(0)).toBe(1);
  it("should return 1 if given 1");
  expect(factorial(1)).toBe(1);
  it("should return 2 if given 2");
  expect(factorial(2)).toBe(2);
  it("should return 6 if given 3");
  expect(factorial(3)).toBe(6);
  it("should return undefined if given negative number");
  expect(factorial(-1)).toBeUndefined()
});
