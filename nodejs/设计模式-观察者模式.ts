type Listener = (eventName: String, info: unknown) => unknown

class EventBus {
  private listenerMap: Map<string, Listener[]>
  constructor() {
    this.listenerMap = new Map()
  }

  on(eventName: string, fn: Listener) {
    const listenerMap = this.listenerMap
    if (!listenerMap.has(eventName)) {
      listenerMap.set(eventName, [])
    }

    listenerMap.get(eventName)?.push(fn)
    console.log('on', eventName)
  }

  emit(eventName: string, info?: unknown) {
    const listenerMap = this.listenerMap
    if (!listenerMap.has(eventName)) {
      return
    }

    const listeners = listenerMap.get(eventName)
    console.log('emit', eventName)
    listeners?.forEach((listener) => listener(eventName, info))
  }

  off(eventName: string) {
    const { listenerMap } = this
    if (listenerMap.has(eventName)) {
      listenerMap.delete(eventName)
      console.log('off', eventName)
    }
  }
}

const eventBus = new EventBus()

eventBus.on('test', (eventName, info) => {
  console.log(eventName, info)
})
eventBus.emit('test', 'hello world')
eventBus.off('test')
