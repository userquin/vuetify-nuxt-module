export default defineNuxtConfig({
  // since it is local, the path is relative to the playground folder
  modules: ['../src/module'],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts',
    /* vuetifyOptions: {
      aliases: {
        MyAvatar: 'VAvatar',
      },
    }, */
  },
})
