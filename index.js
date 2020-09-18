const util = require("./utils");

const transformer = (input) => {
  if (typeof input === "object" && input !== null) {
    const flattenObj = util.flatten(input);
    const keyOfFlattenObj = Object.keys(flattenObj)[0].split(".");
    keyOfFlattenObj.push(flattenObj[Object.keys(flattenObj)[0]]);
    const reverseArray = keyOfFlattenObj.reverse();
    const lastItem = reverseArray.pop();

    const newObject = {};
    newObject[reverseArray.join(".")] = lastItem;
    const outputValue = util.unflatten(newObject);

    return outputValue;
  } else {
    console.log("format error");
    return input;
  }
};

module.exports = transformer;
