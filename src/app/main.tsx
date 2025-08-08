import * as ReactDOM from 'react-dom/client';
import App from './App';

export function render(element: HTMLElement, props) {
    ReactDOM.createRoot(element).render(<App {...props} />)
}