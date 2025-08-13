import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroMock } from './Hero.mock'

const meta = {
    title: 'Example/Hero',
    component: HeroMock,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        text: ['Hero React Component'],
        image: {
            src: 'https://main--eds-react--viltjs.aem.page/media_1a49929ed153c7e4c9267107cfa318e2a0e5f7d74.png',
            alt: 'image alt'
        }
    },
} satisfies Meta<typeof HeroMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: ['Hero React Component'],
        image: {
            src: 'https://main--eds-react--viltjs.aem.page/media_1a49929ed153c7e4c9267107cfa318e2a0e5f7d74.png',
            alt: 'image alt'
        }
    },
};
