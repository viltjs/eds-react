import '../styles/styles.css'
import '../dist/assets/style.css'

import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: { test: 'todo' }
  },
};

export default preview;