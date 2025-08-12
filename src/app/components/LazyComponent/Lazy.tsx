import { Block } from "../Block";

export default function LazyComponent({ block }: EDS.Props) {
    return <div className="bg-green-500 p-2">
        <Block>{block}</Block>
        <p>background color is processed from tailwind</p>
    </div>
}