import { defineConfig } from 'vite'
import { loadEnv } from 'vite'

/*
 * Plugins
 */
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
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
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue\??/],
        imports: [
          'vue',
          'vue-router',
          'vuex',
          {
            vue: ['createVNode', 'render'],
            'vue-router': ['createRouter', 'createWebHistory', 'createWebHashHistory', 'useRouter', 'useRoute'],
            uuid: [['v4', 'uuidv4']],
            // 全局使用 _.xxxx()
            'lodash-es': [
              // default imports
              ['*', '_'] // import { * as _ } from 'lodash-es',
            ]
          },
          // type import
          {
            from: 'vue',
            imports: [
              'App',
              'VNode',
              'ComponentPublicInstance',
              'ComponentPublicInstanceCostom',
              'ComponentInternalInstance'
            ],
            type: true
          },
          {
            from: 'vue-router',
            imports: [
              'RouteRecordRaw',
              'RouteLocationRaw',
              'LocationQuery',
              'RouteParams',
              'RouteLocationNormalizedLoaded',
              'RouteRecordName',
              'NavigationGuard'
            ],
            type: true
          }
        ],
        resolvers: mode === 'development' ? [] : [ElementPlusResolver()],
        dirs: ['./src/hooks'],
        dts: './auto-imports.d.ts',
        eslintrc: {
          enabled: true
        },
        vueTemplate: true
      }),
      Components({
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
