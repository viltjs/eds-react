import { Block, mapBlockElements } from "./Block"

export function Hero({ block }: EDS.Props) {
    const [picture, text] = block.children
    return <>
        <Block>{picture}</Block>
        {mapBlockElements(text).map(({ innerHTML }, i) => <h1 key={innerHTML + i}>
            {innerHTML}
        </h1>)}
    </>
}