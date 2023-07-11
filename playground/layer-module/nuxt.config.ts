export default defineNuxtConfig({
  // since it is local, the path is relative to the playground folder
  modules: ['..src/module'],
  // @ts-expect-error just ignore types
  setup(_options, nuxt) {
    nuxt.hook('vuetify:registerModule', (register: any) => register({
      vuetifyOptions: {
        aliases: {
          MyBtn: 'VBtn',
        },
      },
    }))
  },
})
