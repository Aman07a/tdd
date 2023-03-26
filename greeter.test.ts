import { greeter } from "./greeter";

describe("greeter", () => {
  describe("helloPerson", () => {
    describe("empty name", () => {
      it.only("should return `Hello !`", () => {
        // Arrange
        const expected = "Hello !";
        const input = "";

        const sut = greeter();

        // Act
        const actual = sut.helloPerson(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });
    describe("given name", () => {
      test('skipped should return "Hello `NAME`!"', () => {
        // Arrange
        const expected = "Hello Peter!";
        const input = "Peter";

        const sut = greeter();

        // Act
        const actual = sut.helloPerson(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });
  });
});
