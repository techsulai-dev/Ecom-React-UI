import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return defineConfig({
    base: mode === 'prod' ? '/Ecom-React-UI/' : '/',  // root for local/dev/qa/uat
    plugins: [react()],
    define: {
      __APP_ENV__: env.VITE_APP_ENV
    }
  })
}
