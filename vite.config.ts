import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  // const baseMap: Record<string, string> = {
  //   local: '/',
  //   dev: '/',
  //   qa: '/',
  //   uat: '/',
  //   prod: '/Ecom-React-UI/',  // GitHub Pages requires repo name as base
  // }
  return defineConfig({
    // base: baseMap[mode],
    base: '/Ecom-React-UI/',
    plugins: [react()],
    define: {
      __APP_ENV__: env.VITE_APP_ENV
    }
  })
}
