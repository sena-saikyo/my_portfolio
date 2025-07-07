import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // ホットリロードがDockerでも効くように
    },
    host: true,          // 外部からアクセスできるように（必須）
    port: 5173           // 明示的にポート指定（任意）
  }
});
