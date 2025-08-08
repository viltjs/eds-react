
export function getBlockElement(block: Element) {
    return block.children[0].children[0]
}

export function mapBlockElements(block: Element) {
    return [...block.children[0].children]
}

export function Block({ children }: { children: Element }) {
    return <div ref={ref => { ref?.appendChild(getBlockElement(children)) }} />
}