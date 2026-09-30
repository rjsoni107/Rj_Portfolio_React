import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',

    build: {
        outDir: 'dist',
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('framer-motion')) return 'vendor-framer';
                        if (id.includes('react-icons') || id.includes('lucide-react')) return 'vendor-icons';
                        if (id.includes('swiper') || id.includes('aos')) return 'vendor-plugins';
                        return 'vendor-core';
                    }
                },
            },
        },
    },

    server: {
        host: true,
        port: 5175,
        strictPort: true,
        open: true
    }
})