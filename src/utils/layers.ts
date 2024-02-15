import type { Nuxt } from '@nuxt/schema'
import defu from 'defu'
import type { InlineModuleOptions, VuetifyModuleOptions } from '../types'
import { loadVuetifyConfiguration } from './config'

/**
 * Merges project layer with registered vuetify modules
 */
export async function mergeVuetifyModules(options: VuetifyModuleOptions, nuxt: Nuxt) {
  const moduleOptions: InlineModuleOptions[] = []
  const vuetifyConfigurationFilesToWatch = new Set<string>()

  await nuxt.callHook('vuetify:registerModule', layerModuleOptions => moduleOptions.push(layerModuleOptions))

  if (nuxt.options._layers.length > 1) {
    for (let i = 1; i < nuxt.options._layers.length; i++) {
      const layer = nuxt.options._layers[i]
      const resolvedOptions = await loadVuetifyConfiguration(
        layer.config.rootDir,
        layer.config.vuetify?.vuetifyOptions,
      )

      if (resolvedOptions.sources.length) {
        resolvedOptions.sources
          .map(s => s.replace(/\\/g, '/'))
          .filter(s => !s.includes('/node_modules/'))
          .forEach(s => vuetifyConfigurationFilesToWatch.add(s))
      }

      moduleOptions.push({
        moduleOptions: layer.config.vuetify?.moduleOptions,
        vuetifyOptions: resolvedOptions.config,
      })
    }
  }

  const resolvedOptions = await loadVuetifyConfiguration(
    nuxt.options.rootDir,
    options.vuetifyOptions,
  )

  // handle vuetify configuraton files changes only in dev mode
  if (nuxt.options.dev && resolvedOptions.sources.length) {
    // we need to restart nuxt dev server when SSR is enabled: vite-node doesn't support HMR in server yet
    if (nuxt.options.ssr)
      resolvedOptions.sources.forEach(s => nuxt.options.watch.push(s.replace(/\\/g, '/')))
    else
      resolvedOptions.sources.forEach(s => vuetifyConfigurationFilesToWatch.add(s.replace(/\\/g, '/')))
  }

  moduleOptions.push({
    moduleOptions: options.moduleOptions,
    vuetifyOptions: resolvedOptions.config,
  })

  if (moduleOptions.length > 1) {
    const [base, ...rest] = moduleOptions
    return {
      configuration: <InlineModuleOptions>defu(base, ...rest),
      vuetifyConfigurationFilesToWatch,
    }
  }
  else {
    return {
      configuration: <InlineModuleOptions>{
        moduleOptions: options.moduleOptions,
        vuetifyOptions: resolvedOptions.config,
      },
      vuetifyConfigurationFilesToWatch,
    }
  }
}
