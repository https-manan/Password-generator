import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['ec2-13-60-30-16.eu-north-1.compute.amazonaws.com'],
    allowedHosts: ['manandev.duckdns.org']
  }
})
