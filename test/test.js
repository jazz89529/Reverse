const assert = require("assert");
const transformer = require("../index.js");

describe("Reverse nested input value into output value", function () {
  it("Reverse", function () {
    assert.equal(
      JSON.stringify(
        transformer({
          hired: {
            be: {
              to: {
                deserve: "I",
              },
            },
          },
        })
      ),
      JSON.stringify({ I: { deserve: { to: { be: "hired" } } } })
    );
  });
});
