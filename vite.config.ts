// import react from '@vitejs/plugin-react-swc'
// import { defineConfig } from 'vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    // Configuration for the development server
    proxy: {
      '/api': {
        // Target server for proxying API requests
        target: 'https://login.dataconstruct.com.np',
        // Change the origin of the host header to the target server
        changeOrigin: true,
        // Allow requests with invalid SSL certificates (useful for development)
        secure: false,
        // Rewrite the URL path before forwarding the request
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
