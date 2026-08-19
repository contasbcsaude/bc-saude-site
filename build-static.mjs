import { renderToString } from 'react-dom/server'
import { readFileSync, writeFileSync } from 'fs'
import React from 'react'

// Import the components
const Index = (await import('./src/pages/Index.jsx')).default
const Diagnostico = (await import('./src/pages/Diagnostico.jsx')).default

const html = renderToString(React.createElement(Index))
const diagHtml = renderToString(React.createElement(Diagnostico))

const template = readFileSync('index.html', 'utf-8')

const mainHtml = template
  .replace('<div id="root"></div>', '<div id="root">' + html + '</div>')
  .replace('<script type="module" crossorigin src="./src/main.tsx"></script>', '')
  .replace('crossorigin ', '')

const diagPage = template
  .replace('<div id="root"></div>', '<div id="root">' + diagHtml + '</div>')
  .replace('<script type="module" crossorigin src="./src/main.tsx"></script>', '')
  .replace('crossorigin ', '')

writeFileSync('dist/index.html', mainHtml)
writeFileSync('dist/diagnostico.html', diagPage)
console.log('Static HTML built!')
