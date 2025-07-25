const obj: any = { name: 'why' }
const proxy = new Proxy(obj, {
  get(target, p, receiver) {
    console.log(target, p, receiver)
    return target?.[p]
  },
  set(target, p, newValue, receiver) {
    console.log(target, p, newValue, receiver)
    return true
  },
})

console.log(proxy.name)
proxy.name = 'kobe'
console.log(proxy.name)
