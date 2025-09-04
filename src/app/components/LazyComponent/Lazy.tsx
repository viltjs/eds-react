import { Block } from "../Block";

export default function LazyComponent({ block }: EDS.Props) {
    const [child] = block.children
    child.classList.add('bg-green-500', 'p-2')
    child.replaceChildren("background color is processed from tailwind")
    return <Block>{child}</Block>
}