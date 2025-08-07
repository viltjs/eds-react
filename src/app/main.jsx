import * as ReactDOM from 'react-dom/client';

function MyComponent(props) {
    return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export function render(element, props) {
    ReactDOM.createRoot(element).render(<MyComponent {...props} />)
}