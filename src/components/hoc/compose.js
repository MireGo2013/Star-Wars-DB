export const compose =
  (...funcs) =>
  (Component) => {
    return funcs.reduceRight((prevResult, func) => func(prevResult), Component);
  };
