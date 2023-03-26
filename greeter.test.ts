import { greeter } from "./greeter";

describe("greeter", () => {
  describe("helloPerson", () => {
    describe("empty name", () => {
      it("should return `Hello !`", () => {
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
      it("should return `Hello NAME!`", () => {
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

    describe("helloWorld", () => {
      test("helloWorld given default should return `Hello world!`", () => {
        // Arrange
        const expected = "Hello world!";
        const sut = greeter();

        // Act
        const actual = sut.helloWorld();

        // Assert
        expect(actual).toBe(expected);
      });
    });
  });
});
