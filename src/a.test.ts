import { describe, expect, test } from "bun:test";

const calc = (num: number, num2: number) => num * num2;

describe("firstTest", () => {
  test("hoge", () => {
    expect(calc(1, 2)).toBe(2);
  });
});
