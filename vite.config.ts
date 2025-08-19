import { defineConfig } from 'vite'
import { loadEnv } from 'vite'

/*
 * Plugins
 */
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

/*
 * Components / resolvers
 */
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      Vue(),
      UnoCSS({
        mode: 'global',
        legacy: {
          renderModernChunks: false
        }
      }),
      Components({
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        resolvers: [
          IconsResolver({
            prefix: 'i',
            customCollections: ['icon']
          }),
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      })
    ],
    resolve: {
      alias: {
        '@': '/src'
      } // 路径别名
    },
    server: {
      port: 3000, // 自定义端口
      proxy: {
        // API 代理
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true
        }
      }
    },
    build: {
      minify: 'terser', // 代码压缩
      rollupOptions: {
        output: {
          manualChunks: {
            // 手动分包
            vendor: ['vue', 'vue-router', 'lodash-es']
          }
        }
      }
    },
    define: {
      'process.env.VITE_ROUTER_MODE': JSON.stringify(env.VITE_ROUTER_MODE)
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `@use '@/styles/element-variables.scss' as *;`
        }
      }
    }
  }
})
