import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/',

    server: {
        host: 'localhost',
        port: 3000,
        open: true 
    },

    build: {
        outDir: 'dist', 
        assetsDir: 'assets',
        manifest: true, 
        minify: 'terser'
    },

    define: {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
    },

    plugins: [
        Vue()
    ]
})




