import { fullName } from "../utilities/functions";

describe(`fullName: Combine first/last name strings into one string.`, () => {
  const [first, last] = "John Smith".split(" ");
  it("Should generate a string", () => {
    expect(typeof fullName(first, last)).toMatch("string");
  });
});
