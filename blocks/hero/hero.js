export default function decorate(block) {
    const component = document.createElement('div')
    React.render(component, { text: 'EDS loves ReactJS!' })
    block.appendChild(component)
}