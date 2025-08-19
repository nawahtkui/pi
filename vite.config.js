import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'nawahpi'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  server: { port: 5173, open: true }
})