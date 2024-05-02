import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/',

    // Configurações do servidor de desenvolvimento
    server: {
        host: 'localhost', // Host do servidor
        port: 3000, // Porta do servidor
        open: true // Abrir automaticamente o navegador
    },

    // Configurações de construção para produção
    build: {
        outDir: 'dist', // Diretório de saída para os arquivos construídos
        assetsDir: 'assets', // Diretório dos assets
        manifest: true, // Geração do arquivo de manifesto
        minify: 'terser' // Opções de minificação do código
    },

    // Variáveis globais definidas no ambiente de construção
    define: {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
    },

    plugins: [
        Vue()
    ]
})




