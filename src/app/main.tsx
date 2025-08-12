import './tailwind.css'

import * as ReactDOM from 'react-dom/client'
import * as components from './components'

export function render(name: string, block: HTMLElement) {
    const Component = (components as unknown as Record<string, (props: { block: Node; }) => React.JSX.Element>)[name]
    const children = <Component block={block.cloneNode(true)} />
    block.innerHTML = ''
    ReactDOM.createRoot(block).render(children)
}