import { render } from '../../dist/main.js'

export default function decorate(block) {
  console.log("🚀 ~ decorate ~ block:", block)
  const component = document.createElement('div')
  render(component, { text: 'EDS loves ReactJS!' })
  block.appendChild(component)
}
