export function Block({ children }: { children?: Element }) {
    return children ? <div ref={ref => { ref?.appendChild<Element>(children) }} /> : null
}