import { Block } from "../Block";

export default function LazyComponent({ block }: EDS.Props) {
    block.classList.add('bg-green-500', 'p-2')
    block.children[0].replaceChildren("background color is processed from tailwind")
    return <Block>{block}</Block>
}