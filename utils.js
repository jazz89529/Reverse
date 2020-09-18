const flatten = (obj) => {
  let toReturn = {};

  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if (typeof obj[i] == "object" && obj[i] !== null) {
      let flatObject = flatten(obj[i]);
      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = obj[i];
    }
  }
  return toReturn;
};

const unflatten = (obj) => {
  let result = {};
  for (let i in obj) {
    let keys = i.split(".");
    keys.reduce(function (r, e, j) {
      return (
        r[e] ||
        (r[e] = isNaN(Number(keys[j + 1]))
          ? keys.length - 1 == j
            ? obj[i]
            : {}
          : [])
      );
    }, result);
  }
  return result;
};

module.exports = { flatten, unflatten };
