import { Modal } from './Modal'

function App() {
  return (
    <div>
      app
      <button
        onClick={() => {
          Modal.confirm({
            title: '标题',
            content: '内容',
            footer: (onOk, onCancel, onClose) => {
              return (
                <div>
                  <button
                    onClick={() => {
                      onOk()
                      onClose()
                    }}
                  >
                    确定
                  </button>
                  <button
                    onClick={() => {
                      onCancel()
                      onClose()
                    }}
                  >
                    取消
                  </button>
                  <button onClick={onClose}>关闭</button>
                </div>
              )
            },
            onOk: () => {
              console.log('ok')
            },
            onCancel: () => {
              console.log('cancel')
            },
            onClose: () => {
              console.log('close')
            },
          })
        }}
      >
        Modal
      </button>
    </div>
  )
}

export default App
