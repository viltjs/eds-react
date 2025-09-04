export class Breakpoint {
    static QUERIES = {
        'mobile-sm': '(max-width: 320px)',
        'mobile-s': '(max-width: 375px)',
        mobile: '(max-width: 425px)',
        tablet: '(min-width: 425px) and (max-width: 768px)',
        desktop: '(min-width: 768px)',
        'desktop-l': '(min-width: 1024px)',
    }
    static get matches() {
        return Object.entries(Breakpoint.QUERIES).reduce((acc, [key, value]) => {
            return { ...acc, [key]: window.matchMedia(value).matches }
        }, {})
    }
    static get isMobile() {
        return window.matchMedia(Breakpoint.QUERIES.mobile).matches
    }
    static get isTablet() {
        return window.matchMedia(Breakpoint.QUERIES.tablet).matches
    }
    static get isDesktop() {
        return window.matchMedia(Breakpoint.QUERIES.desktop).matches
    }
}

Object.entries(Breakpoint.QUERIES).forEach(([key, value]) => {
    window.matchMedia(value).addEventListener('change', ({ matches }) => {
        if (matches) document.body.classList.add(key)
        else document.body.classList.remove(key)
    })
})

Object.entries(Breakpoint.QUERIES).forEach(([key, value]) => {
    if (window.matchMedia(value).matches) document.body.classList.add(key)
})
