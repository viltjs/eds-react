import { Hero } from '../app/components';

export const createMockBlock = (text: string[], image: { src: string, alt: string }) => {
    const block = document.createElement('div')
    block.innerHTML = `
        <div>
            <div>
                <picture>
                    <img loading="lazy" alt="${image.alt}" src="${image.src}" width="750" height="516" />
                </picture>
            </div>
        </div>
        ${text.map((t) => `<div><div><p>${t}</p></div></div>`).join('')}
    `
    return block
};

export function HeroMock({ text, image }: {
    text: string[]
    image: { src: string; alt: string }
}) {
    return <div className='hero-react-wrapper'>
        <div className='hero-react block'>
            <Hero block={createMockBlock(text, image)} />
        </div>
    </div>
}
