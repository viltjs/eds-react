import './style.css'
import { Block, mapBlockElements } from "../Block"

export function Hero({ block }: EDS.Props) {
    const [picture, text] = block.children
    const textrender = mapBlockElements(text).map(({ innerHTML }, i) => <h1
        key={innerHTML + i}
        className='hero-react__title'
        data-aue-prop="text"
        data-aue-label="Text"
        data-aue-type="richtext"
    >{innerHTML}</h1>)
    return <>
        <Block>{picture}</Block>
        {textrender}
    </>
}