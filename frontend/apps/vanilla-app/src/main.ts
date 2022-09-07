import './style.css'
import { XOverviewGroup } from '@go1d/partnerhub_report'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <x-overview-group />
`

customElements.define('x-overview-group', XOverviewGroup)
