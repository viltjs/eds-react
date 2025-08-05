export default function decorate(block) {
    const component = document.createElement('div')
    window.ReactBlocks.render(component, { text: 'EDS loves ReactJS!' })
    block.appendChild(component)
}