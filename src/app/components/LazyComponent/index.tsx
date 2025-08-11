import './style.css'
import { lazy, Suspense } from 'react';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const Lazy = lazy(() => delay(3000).then(() => import('./Lazy')));

export function LazyComponent({ block }: EDS.Props) {
    return <Suspense fallback={<p>Loading Lazy Component...</p>}>
        <Lazy block={block} />
    </Suspense>
}