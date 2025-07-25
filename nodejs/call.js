Function.prototype.mCall = function (context, ...args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

Function.prototype.mApply = function (context, args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

const obj = { name: 'a' }
function f(context, ...args) {
  console.log(this, arguments)
}

f()
f.mCall(obj, 3, 2, 1)
f.mApply(obj, [3, 2, 1])
