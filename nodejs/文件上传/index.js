// index.js - 原生 Node.js 文件上传实现
const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const UPLOAD_DIR = './uploads'

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR)
}

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' })
    res.end('ok')
    return
  }

  if (req.url === '/upload') {
    let chunks = []

    req.on('data', (chunk) => {
      chunks.push(chunk)
    })

    req.on('end', () => {
      const boundary = req.headers['content-type'].split('boundary=')[1]
      const postData = Buffer.concat(chunks).toString('binary')
      const fileData = postData.split(`--${boundary}`)[1]
      const filename = Buffer.from(fileData.match(/filename="(.+?)"/)[1], 'binary').toString('utf-8')
      const start = fileData.indexOf('\r\n\r\n') + 4
      const end = fileData.lastIndexOf('\r\n')
      const data = Buffer.from(fileData.slice(start, end), 'binary')
      fs.writeFileSync(path.join(__dirname, UPLOAD_DIR, filename), data)
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' })
      res.end('ok')
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf8' })
    res.end('页面未找到')
  }
})

server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`)
})
