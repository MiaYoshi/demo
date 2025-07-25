// 实现一个函数search可以进行关键词搜索,返回出关键词出现的链路
// 比如 search('西半') 返回 ['北京市', '朝阳区', '西半街道']
// 比如 search('朝阳区') 返回 ['北京市', '朝阳区']
// 比如 search('街道') 返回 ['北京市', '昌平区', '昌平街道']、 ['北京市', '朝阳区', '西半街道']
let testObj = {
  babel: '北京市',
  child: [
    {
      babel: '朝阳区',
      child: [
        {
          babel: '西半街道',
        },
        {
          babel: '向上向善',
        },
      ],
    },
    {
      babel: '昌平区',
      child: [
        {
          babel: '香水百合',
        },
        {
          babel: '昌平街道',
        },
      ],
    },
  ],
}
const func = (obj, keyword, prevPath = []) => {
  const res = []
  const { babel, child } = obj || {}
  if (babel && babel.includes(keyword)) {
    res.push([...prevPath, babel])
  }
  if (child) {
    child.forEach((item) => {
      const temp = func(item, keyword, [...prevPath, babel])
      temp.length && res.push(...temp)
    })
  }
  return res
}
console.log(JSON.stringify(func(testObj, '道')))
