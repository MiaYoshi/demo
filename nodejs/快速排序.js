const func = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const p = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return func(left).concat(p, func(right))
}
console.log(func([3, 3, 4, 1]))
