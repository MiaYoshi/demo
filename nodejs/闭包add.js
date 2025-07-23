const add = (...args) => {
  const sum = (...args2) => add(...args, ...args2)
  sum.value = args.reduce((a, b) => a + b, 0)
  return sum
}

console.log(add(1, 3)(2, 4)(3, 1, 1).value)
