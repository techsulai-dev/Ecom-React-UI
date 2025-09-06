import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
  // base: mode === 'production' ? '/Ecom-React-UI/' : '/', // 👈 switch base by mode
  };
});
 