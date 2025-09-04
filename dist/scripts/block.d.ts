import { filterBlockImgs, filterBlockTxts, flatBlock } from '../app/components/Block/utils';
export declare class Block {
    flat: Element[][];
    txts: Element[][];
    imgs: {
        picture?: Element;
        sources?: Element[];
        img?: Element;
    }[];
    constructor(block: HTMLElement);
    static flat: typeof flatBlock;
    static imgs: typeof filterBlockImgs;
    static txts: typeof filterBlockTxts;
    static css: (blockname: string) => Promise<unknown>;
    static jointxts: (txts: Element[], tag: string) => HTMLElement | "";
}
