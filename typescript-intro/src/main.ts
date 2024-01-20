import { charmander } from './bases/04-injection'
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hola ${charmander.imageUrl}</h1>

    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more!
    </p>
  </div>
`

