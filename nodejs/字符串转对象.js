// 字符串转嵌套对象。从"a.b.c.d.e"变成{a:{b:c{d:{e:{}}}}}这样
/**
 *
 * @param {String} str
 */
const func = (str) => {
  let arr = str.split('.')
  const res = {}
  const temp = (obj, key) => {
    obj[key] = {}
    return obj[key]
  }
  arr.reduce((prev, curr) => {
    return temp(prev, curr)
  }, res)
  return res
}
console.log(JSON.stringify(func('a.b.c.d.e')))
