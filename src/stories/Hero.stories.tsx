
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as ReactDOM from 'react-dom/client'

import { Hero } from '../app/components';

function HeroTest({ block }: Parameters<typeof Hero>['0']) {
    return <div className='hero-react-wrapper'>
        <div className='hero-react block'>
            <Hero block={block} />
        </div>
    </div>
}

const block = document.createElement('div')
ReactDOM.createRoot(block).render(<>
    <div>
        <div>
            <picture>
                <img loading="lazy" alt="image alt" src="https://main--eds-react--viltjs.aem.page/media_1a49929ed153c7e4c9267107cfa318e2a0e5f7d74.png" width="750" height="516" />
            </picture>
        </div>
    </div>
    <div><div><p>Hero React Component</p></div></div>
</>)

const meta = {
    title: 'Example/Hero',
    component: HeroTest,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { block },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        block
    },
};
