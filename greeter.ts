export function greeter() {
  return {
    helloWorld: function () {
      return "Hello world!";
    },
    helloPerson: function (name: string) {
      return "Hello " + name + "!";
    },
  };
}
