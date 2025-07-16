import { useRef, type ComponentType, type ReactNode } from 'react'

interface IProps {
  visable?: boolean
}
function withKeepAlive<P extends IProps>(WrapperComponent: ComponentType<P>) {
  return (props: P) => {
    const { visable = true } = props
    const compRef = useRef<ReactNode>(null)
    if (!compRef.current) {
      compRef.current = <WrapperComponent {...props} />
    }
    return <div style={{ display: visable ? 'block' : 'none' }}>{compRef.current}</div>
  }
}

export default withKeepAlive
