const sumArrays = (...args) => {
  return args.map(arr => {
    return arr.reduce((sum, num) => sum + num, 0);
  });
};

console.log(sumArrays([1,2,3],[2,3,4]));
