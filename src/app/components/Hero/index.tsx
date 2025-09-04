import './style.css'
import { Block } from "../Block"
import { inner } from '../Block/utils'

export function Hero({ block }: EDS.Props) {
    const { imgs: [{ picture } = {}], txts: [txts = []] } = inner(block)
    const textrender = txts.map((txt, i) => <h1
        key={txt + String(i)}
        className='hero-react__title'
        data-aue-prop="text"
        data-aue-label="Text"
        data-aue-type="richtext"
        ref={ref => { if (ref) ref.innerHTML = txt.innerHTML }}
    />)
    return <>
        <Block>{picture}</Block>
        {textrender}
    </>
}