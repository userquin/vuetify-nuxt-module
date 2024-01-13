import { addPluginTemplate } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { VuetifyNuxtContext } from './config'

export function addVuetifyNuxtPlugins(
  nuxt: Nuxt,
  ctx: VuetifyNuxtContext,
) {
  addVuetifyNuxtPlugin(nuxt, ctx, 'client')
  addVuetifyNuxtPlugin(nuxt, ctx, 'server')
}

function addVuetifyNuxtPlugin(
  nuxt: Nuxt,
  ctx: VuetifyNuxtContext,
  mode: 'client' | 'server',
) {
  addPluginTemplate({
    filename: `vuetify-nuxt-plugin.${mode}.mjs`,
    name: `vuetify:nuxt:${mode}:plugin`,
    write: false,
    mode,
    getContents() {
      const dependsOn = ['vuetify:icons:plugin'] as import('#app').NuxtAppLiterals['pluginName'][]
      if (ctx.ssrClientHints.enabled) {
        if (mode === 'client')
          // @ts-expect-error missing at build time
          dependsOn.push('vuetify:client-hints:client:plugin')
        else
          // @ts-expect-error missing at build time
          dependsOn.push('vuetify:client-hints:server:plugin')
      }
      if (ctx.i18n) {
        // @ts-expect-error missing at build time
        dependsOn.push('vuetify:i18n:plugin')
      }
      if (nuxt.options.dev || ctx.dateAdapter) {
        if (ctx.i18n) {
          // @ts-expect-error missing at build time
          dependsOn.push('vuetify:date-i18n:plugin')
        }
        else {
          // @ts-expect-error missing at build time
          dependsOn.push('vuetify:date:plugin')
        }
      }
      return `
import { defineNuxtPlugin } from '#imports'
import { isDev, vuetifyConfiguration } from 'virtual:vuetify-configuration'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin({
  name: 'vuetify:nuxt:${mode}:plugin',
  order: 25,
  dependsOn: ${JSON.stringify(dependsOn)},
  parallel: true,
  async setup(nuxtApp) {
    const vuetifyOptions = vuetifyConfiguration()
    await nuxtApp.hooks.callHook('vuetify:configuration', { isDev, vuetifyOptions })
    await nuxtApp.hooks.callHook('vuetify:before-create', { isDev, vuetifyOptions })
    const vuetify = createVuetify(vuetifyOptions)
    nuxtApp.vueApp.use(vuetify)
    nuxtApp.provide('vuetify', vuetify)
    await nuxtApp.hooks.callHook('vuetify:ready', vuetify)
    if (process.client)
      isDev && console.log('Vuetify 3 initialized', vuetify)
  },
})
`
    },
  })
}
