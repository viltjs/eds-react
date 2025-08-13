import './tailwind.css'

import { render as prender } from 'preact';
import * as components from './components'

export function render(name: string, block: HTMLElement) {
    const Component = (components as unknown as Record<string, (props: { block: Node; }) => React.JSX.Element>)[name]
    const children = <Component block={block.cloneNode(true)} />
    block.innerHTML = ''
    prender(children, block)
}