import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@layout': path.resolve(__dirname, 'src/layout/'),
            '@router': path.resolve(__dirname, 'src/router/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@section': path.resolve(__dirname, 'src/section/'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    }
});
