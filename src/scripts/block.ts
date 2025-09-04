import { filterBlockImgs, filterBlockTxts, flatBlock, inner } from "../app/components/Block/utils"

export class Block {
    flat: Element[][]
    txts: Element[][] = []
    imgs: {
        picture?: Element,
        sources?: Element[],
        img?: Element
    }[] = []

    constructor(block: HTMLElement) {
        const { flat, txts, imgs } = inner(block)
        this.flat = flat
        this.txts = txts
        this.imgs = imgs
    }

    static flat = flatBlock
    static imgs = filterBlockImgs
    static txts = filterBlockTxts

    static css = async (blockname: string) => new Promise((resolve, reject) => {
        const href = `${window.hlx.codeBasePath}/blocks/${blockname}/${blockname}.css`
        if (!document.querySelector(`head > link[href="${href}"]`)) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = href
            link.onload = resolve
            link.onerror = reject
            document.head.append(link)
        } else resolve(null)
    })

    static jointxts = (txts: Element[], tag: string) => {
        if (txts?.length) {
            const el = document.createElement(tag)
            el.innerHTML = txts.map(txt => txt.innerHTML).join('<br />')
            return el
        }
        return ''
    }
}