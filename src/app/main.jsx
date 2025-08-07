import * as ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const LazyComponent = lazy(() =>
    delay(3000).then(() => import('./components/LazyComponent.jsx'))
);

function MyComponent(props) {
    return <>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <Suspense fallback={<p className='lazy-component'>Loading component...</p>}>
            <LazyComponent />
        </Suspense>
    </>
}

export function render(element, props) {
    ReactDOM.createRoot(element).render(<MyComponent {...props} />)
}