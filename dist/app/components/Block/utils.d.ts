export declare function flat(element: Element): Element[][];
export declare function flatBlock(block: Element): Element[][];
export declare function filterBlockImgs(block: Element): {
    picture: Element | undefined;
    sources: Element[];
    img: Element | undefined;
}[];
export declare function filterBlockTxts(block: Element): Element[][];
export declare function inner(block: Element): {
    txts: Element[][];
    imgs: {
        picture?: Element;
        sources?: Element[];
        img?: Element;
    }[];
    flat: Element[][];
};
