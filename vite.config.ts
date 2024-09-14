import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            components: '/src/components',
            services: '/src/services',
            constants: '/src/constants',
            store: '/src/store',
            hooks: '/src/hooks',
        },
    },
});
