import { useState } from 'react'
import withKeepAlive from './hoc/withKeepAlive'

function Comp() {
  const [count, setCount] = useState(0)
  return (
    <div>
      count: {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        count++
      </button>
    </div>
  )
}

const KeepAliveComp = withKeepAlive(Comp)
function App() {
  const [visable, setVisable] = useState(true)

  return (
    <div>
      <button onClick={() => setVisable(!visable)}>btn</button>
      <KeepAliveComp visable={visable} />
    </div>
  )
}

export default App
