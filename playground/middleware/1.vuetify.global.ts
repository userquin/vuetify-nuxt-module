export default defineNuxtRouteMiddleware((to) => {
  // eslint-disable-next-line no-console
  console.log('global middleware', to.path, useNuxtApp().$vuetify)
})
