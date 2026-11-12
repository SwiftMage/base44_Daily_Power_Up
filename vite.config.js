import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { handleAffirmationsRoute, handleSharedAuthRoute } from './server/sharedAuth.js'

// https://vite.dev/config/
function localSharedAuth() {
  const handlers = {
    '/api/shared-login': (req, res) => handleSharedAuthRoute('login', req, res),
    '/api/shared-session': (req, res) => handleSharedAuthRoute('session', req, res),
    '/api/shared-logout': (req, res) => handleSharedAuthRoute('logout', req, res),
    '/api/affirmations': (req, res) => handleAffirmationsRoute(req, res),
  }

  function middleware(req, res, next) {
    const route = (req.url || '').split('?')[0]
    const handler = handlers[route]
    if (!handler) return next()
    Promise.resolve(handler(req, res)).catch(next)
  }

  return {
    name: 'local-shared-teacher-auth',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig({
    plugins: [react(), localSharedAuth()],
    server: {
      allowedHosts: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
})
