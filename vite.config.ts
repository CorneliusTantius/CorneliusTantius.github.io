import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// This username.github.io repository is deployed at the domain root.
export default defineConfig({
  base: '/',
  plugins: [preact()],
})
