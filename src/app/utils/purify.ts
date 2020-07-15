export const memoize = (fn: any) => {
  return function () {
    const args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args));
  }
};

export function purify() {
  return function (target: any, key: any, descriptor: any) {
    const oldFunc = descriptor.value;
    const newFunc = memoize(oldFunc);
    descriptor.value = () => {
      return newFunc.apply(this, arguments);
    };
  }
}