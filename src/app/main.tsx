import * as ReactDOM from 'react-dom/client';
import App from './App';

export function render(element, props) {
    ReactDOM.createRoot(element).render(<App {...props} />)
}