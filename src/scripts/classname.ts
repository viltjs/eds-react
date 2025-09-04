export class Classname {
    static move(from: Element, to: Element, classnames: string[] = []) {
        from.classList.forEach(c => classnames.includes(c) && to.classList.add(c))
        from.classList.remove(...classnames)
    }
}
