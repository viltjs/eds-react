export function flat(element: Element): Element[][] {
    return [...element.children].map(child => [child, ...flat(child).flat()])
}

function clearElementsDiv(elements: Element[]) {
    return elements.filter(el => el.tagName !== 'DIV')
}

export function flatBlock(block: Element) {
    return flat(block).map(clearElementsDiv)
}

export function filterBlockImgs(block: Element) {
    return flatBlock(block).map(item => ({
        picture: item.find(item => item.tagName === 'PICTURE'),
        sources: item.filter(item => item.tagName === 'SOURCE'),
        img: item.find(item => item.tagName === 'IMG')
    })).filter(({ img }) => !!img)
}

const TEXT_TAGS = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'STRONG', 'EM']
export function filterBlockTxts(block: Element) {
    return flatBlock(block).map(item => item.filter(item => TEXT_TAGS.includes(item.tagName)))
}

export function inner(block: Element) {
    const txts: Element[][] = []
    const imgs: { picture?: Element; sources?: Element[]; img?: Element }[] = []
    return {
        txts, imgs, flat: flatBlock(block).map(item => {
            txts.push(item.filter(item => TEXT_TAGS.includes(item.tagName)))
            const img = item.find(item => item.tagName === 'IMG')
            if (img) imgs.push({
                picture: item.find(item => item.tagName === 'PICTURE'),
                sources: item.filter(item => item.tagName === 'SOURCE'),
                img
            })
            return item
        })
    }
}
