/// <reference types="vite/client" />
/// <reference types="@vitest/browser/providers/playwright" />

declare namespace EDS {
    export interface Props {
        block: HTMLElement;
    }
}

interface Window {
    hlx: {
        codeBasePath: string
    }
}