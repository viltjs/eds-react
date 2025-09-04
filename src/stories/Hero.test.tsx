import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from '../app/components';
import { createMockBlock } from './Hero.mock';

const text = ['Hero React Component'];
const image = {
    src: 'https://main--start-site--evertonheckler.aem.page/media_1a49929ed153c7e4c9267107cfa318e2a0e5f7d74.png',
    alt: 'image alt'
}

describe('Hero', () => {
    it('renders the Hero component', () => {
        act(() => { render(<Hero block={createMockBlock(text, image)} />) })

        const imageElement = screen.getByRole('img', { name: image.alt })
        expect(imageElement).toBeInTheDocument()

        const textElement = screen.getByText(text[0])
        expect(textElement).toBeInTheDocument()
    })
})