import React, { type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

interface ModalProps {
  visible: boolean
  title?: ReactNode | string
  content?: ReactNode | string
  footer?: (onOk: () => void, onCancel: () => void, onClose: () => void) => ReactNode
  onOk: () => void
  onCancel: () => void
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
  if (!props?.visible) return null
  const { title, content, footer, onCancel, onClose, onOk } = props

  return (
    <div
      style={{
        inset: 0,
        position: 'fixed',
        margin: 0,
        padding: 0,
        zIndex: 99,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="footer">{footer?.(onOk, onCancel, onClose)}</div>
      </div>
    </div>
  )
}
;(Modal as any).confirm = (props: Partial<ModalProps>) => {
  const container = document.createElement('div')
  const root = createRoot(container)
  document.body.appendChild(container)
  const onOk = async () => {
    await props?.onOk?.()
  }
  const onCancel = async () => {
    await props?.onCancel?.()
  }
  const onClose = async () => {
    await props?.onClose?.()
    root.unmount()
    document.body.removeChild(container)
  }

  root.render(<Modal visible {...props} onOk={onOk} onCancel={onCancel} onClose={onClose} />)
}
