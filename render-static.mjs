import React from 'react'
import { renderToString } from 'react-dom/server'
import { writeFileSync, mkdirSync } from 'fs'
import { JSDOM } from 'jsdom'

// Dynamic imports for TSX files won't work in plain Node
// Instead, let's use Vite's SSR build
console.log('Use vite build instead')
