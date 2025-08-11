import { Block } from "../Block";

export default function LazyComponent({ block }: EDS.Props) {
    return <Block>{block}</Block>
}