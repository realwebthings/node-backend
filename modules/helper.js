const getAllMethods = (obj) => {
  let props = [];
  let currentObj = obj;
  do {
    props = props.concat(Object.getOwnPropertyNames(currentObj));
    currentObj = Object.getPrototypeOf(currentObj);
  } while (currentObj);

  return props.filter((prop) => typeof obj[prop] === "function");
};

export { getAllMethods };
