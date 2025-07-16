const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log('open')
})

const map = new Map()
wss.on('connection', (ws, req) => {
  if (!map.has(ws)) {
    map.set(ws, 1)
  }
  console.log('connection: ', req.socket.remoteAddress)

  ws.on('message', (message) => {
    console.log('received: ', message.toString())
    for (let client of wss.clients) {
      client.send(message.toString())
    }
  })
  ws.on('close', (code, reason) => {
    console.log('close: ', code, reason)
    map.has(ws) && map.delete(ws)
  })
  ws.on('error', (error) => {
    console.log('error: ', error, req.socket.remoteAddress)
    map.has(ws) && map.delete(ws)
  })
})
