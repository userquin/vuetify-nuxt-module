export default defineNuxtConfig({
  compatibilityDate: '2024-08-15',
  sourcemap: true,
  imports: {
    autoImport: true,
    injectAtEnd: true,
  },
  modules: ['@unocss/nuxt', 'vuetify-nuxt-module'],
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        reloadOnFirstRequest: false,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
        viewportSize: true,
      },
      styles: { configFile: 'assets/custom-vuetify.scss' },
    },
  },
  vite: {
    clearScreen: false,
    define: {
      'process.env.DEBUG': false,
    },
    build: {
      target: 'esnext',
    },
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
  routeRules: {
    '/no-ssr': { ssr: false },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { charset: 'utf-8' },
      ],
    },
  },
  css: ['~/assets/main.scss'],
  features: {
    devLogs: false,
    inlineStyles: false,
  },
  experimental: {
    payloadExtraction: false,
    typedPages: false,
    watcher: 'parcel',
  },
  devtools: {
    enabled: true,
  },
})
