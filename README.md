<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/userquin/vuetify-nuxt-module/raw/main/hero-dark.svg" />
  <img alt="vuetify-nuxt-module - Zero-config Nuxt module for Vuetify" src='https://github.com/userquin/vuetify-nuxt-module/raw/main/hero.svg' alt="vuetify-nuxt-module - Zero-config Nuxt module for Vuetify"><br>
</picture>
<p>Zero-config Nuxt module for Vuetify</p>
</div>

<p align='center'>
<a href='https://www.npmjs.com/package/vuetify-nuxt-module' target="__blank">
<img src='https://img.shields.io/npm/v/vuetify-nuxt-module?color=33A6B8&label=' alt="NPM version">
</a>
<a href="https://www.npmjs.com/package/vuetify-nuxt-module" target="__blank">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vuetify-nuxt-module?color=476582&label=">
</a>
<!--
<a href="https://vite-pwa-org.netlify.app/frameworks/nuxt" target="__blank">
    <img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20guides&color=2e859c" alt="Docs & Guides">
</a>
-->
<br>
<a href="https://github.com/userquin/vuetify-nuxt-module" target="__blank">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/userquin/vuetify-nuxt-module?style=social">
</a>
</p>

<br>

## 🚀 Features

- 👌 **Zero-Config**: sensible built-in default [Vuetify](https://vuetifyjs.com/) configuration for common use cases
- 🔌 **Extensible**: expose the ability to customize the Vuetify configuration via [Nuxt Plugin Hooks](https://nuxt.com/docs/guide/going-further/hooks#usage-with-plugins)
- ⚡ **Fully Tree Shakable**: by default, only the needed Vuetify components are imported
- 🛠️ **Versatile**: custom Vuetify [directives](https://vuetifyjs.com/en/getting-started/installation/#manual-steps) and [labs components](https://vuetifyjs.com/en/labs/introduction/) registration
- ✨ **Configurable Styles**: configure your variables using [Vuetify SASS Variables](https://vuetifyjs.com/en/features/sass-variables/) 
- 💥 **SSR**: automatic SSR detection and configuration
- 😃 **Icon Fonts**: configure the [icon font](https://vuetifyjs.com/en/features/icon-fonts/) you want to use, the module will automatically import it for you using CDN or local dependencies
- 🎭 **SVG Icons**: ready to use [@mdi/js](https://www.npmjs.com/package/@mdi/js) and [@fortawesome/vue-fontawesome](https://www.npmjs.com/package/@fortawesome/vue-fontawesome) SVG icons packs
- 📦 **Multiple Icon Sets**: register [multiple icon sets](https://vuetifyjs.com/en/features/icon-fonts/#multiple-icon-sets)
- 🌍 **I18n Ready**: install [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/) Nuxt module, and you're ready to use Vuetify [internationalization](https://vuetifyjs.com/en/features/internationalization/) features
- 📆 **Date Components**: use Vuetify components [that require date functionality](https://vuetifyjs.com/en/features/dates/) installing and configuring one of the [@date-io](https://github.com/dmtrKovalenko/date-io#projects) adapters
- ⚙️ **Auto-Import Vuetify Composables**: you don't need to import Vuetify composables manually, they are automatically imported for you
- 🎨 **Vuetify Blueprints**: use [Vuetify Blueprints](https://vuetifyjs.com/en/features/blueprints/) to quickly scaffold components
- 🔩 **Nuxt Layers and Hooks**: load your Vuetify configuration using [Nuxt Layers](https://nuxt.com/docs/getting-started/layers#layers) or using a custom module via `vuetify:registerModule` [Nuxt Hook](https://nuxt.com/docs/guide/going-further/hooks#nuxt-hooks-build-time)
- 🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/)

## 📦 Install

> Requires Vite, will not work with Webpack

```bash
npm i vuetify-nuxt-module -D 

# yarn 
yarn add vuetify-nuxt-module -D

# pnpm 
pnpm add vuetify-nuxt-module -D
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/userquin/vuetify-nuxt-module)

## 🦄 Usage

> `vuetify-nuxt-module` is strongly opinionated and has a built-in default configuration out of the box. You can use it without any configuration, and it will work for most use cases.

Add `vuetify-nuxt-module` module to `nuxt.config.ts` and configure it:

```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})
```

## 🔥 Components, Directives, Lab Components

The module will enable automatic tree shaking for Vuetify components.

You don't need to install any Vuetify Vite Plugin (the module will throw an error if any Vuetify Vite Plugin is installed in your Nuxt configuration):
- the module will provide auto-import support via `vuetify/dist/json/importMap.json` json file and Nuxt `components:extend` hook.
- the module will register a custom Vite Plugin for Vuetify styles: it is just a copy from the original Vuetify Vite Styles Plugin, changing some virtual names mappings and handling SSR flags.

### Global Components

If you need to add some global component, use `vuetifyOptions.components` module option, it has been declared properly to have better DX.

Check the [components definition](https://github.com/userquin/vuetify-nuxt-module/blob/main/src/types.ts#L80-L81).

You can also provide [Aliasing & Virtual Components](https://vuetifyjs.com/en/features/aliasing/#virtual-component-defaults) via `vuetifyOptions.aliases` module option to register components with a different name, only available for global components. The components require to be registered globally.

### Directives

By default, the module will not register any Vuetify directive. If you need to register some directive, use `vuetifyOptions.directives` module option, it has been declared properly to have better DX.

You can register all the directives or only the ones you need: check the [directives definition](https://github.com/userquin/vuetify-nuxt-module/blob/main/src/types.ts#L82-L83).

### Labs Components

The module provides support to use Vuetify [labs components](https://vuetifyjs.com/en/labs/introduction/) via `vuetifyOptions.labsComponents` module option, it has been declared properly to have better DX.

You can register all the labs components or only the ones you need: check the [labsComponent definition](https://github.com/userquin/vuetify-nuxt-module/blob/main/src/types.ts#L84-L85).

## 🔩 Nuxt Layers and Hooks

You can load your Vuetify configuration using [Nuxt Layers](https://nuxt.com/docs/getting-started/layers#layers) or using a custom module via `vuetify:registerModule` [Nuxt Hook](https://nuxt.com/docs/guide/going-further/hooks#nuxt-hooks-build-time).

### Nuxt Layers

Add your Vuetify configuration to a layer and then configure the module to use it:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  layers: ['my-awesome-vuetify-layer'],
  modules: ['vuetify-nuxt-module']
}) 
```

### Nuxt Hook

You can use a custom module to load your Vuetify configuration:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'
import MyVuetifyModule from './modules/my-vuetify-module'

export default defineNuxtConfig({
  modules: [MyVuetifyModule, 'vuetify-nuxt-module']
}) 
```

and the module will load your configuration:
```ts
// modules/my-vuetify-module
export default defineNuxtConfig({
  modules: ['../module'],
  setup(_options, nuxt) {
    nuxt.hook('vuetify:registerModule', (register) => register({
      moduleOptions: {
        /* module specific options */
      },
      vuetifyOptions: {
        /* vuetify options */
      },
    }))
  },
})
```

## 😃 Font Icons

This module supports the following font icons libraries:
- [Material Design Icons](https://materialdesignicons.com/)
- [Material Icons](https://fonts.google.com/icons)
- [Font Awesome 4](https://fontawesome.com/v4.7.0/)
- [Font Awesome 5](https://fontawesome.com/)

By default, the module will use the `mdi` font icon library. You can change it by setting the `defaultSet` option to:
- `mdi` for [Material Design Icons](https://materialdesignicons.com/)
- `md` for [Material Icons](https://fonts.google.com/icons)
- `fa4` for [Font Awesome 4](https://fontawesome.com/v4.7.0/)
- `fa` for [Font Awesome 5](https://fontawesome.com)

To configure a font icon you only need to specify the default set:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi'
      }
    }
  }
})
```

The module will use the CDN version of the font icon. If you want to use the local version, you only need to install the corresponding dependency, the module will auto-detect it and will switch to register the font to use the local version.

The CDN used for each font icon library, you can use the `cdn` option to change it:
- [CDN for Material Design Icons (mdi)](https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css)
- [CDN for Material Icons (md)](https://fonts.googleapis.com/css?family=Material+Icons)
- [CDN for Font Awesome 4 (fa4)](https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css)
- [CDN for Font Awesome 5 (fa)](https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css)

To change the CDN for a font icon library you only need to specify the `cdn` option:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
        sets: [{
          name: 'mdi',
          cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons'
        }]
      }
    }
  }
})
```

## 🎭 SVG Icons

This module supports the following SVG icon libraries:
- [@mdi/js](https://www.npmjs.com/package/@mdi/js)
- [@fortawesome/fontawesome-svg-core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)

We're trying to figure out how to include the following SVG icon libraries:
- [Nuxt Icon](https://github.com/nuxt-modules/icon)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)

### mdi-svg

You only need to add `@mdi/js` dependency to your project and configure the default set:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg'
      }
    }
  }
})
```

You can also add icon aliases:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg',
        svg: {
          mdi: {
            aliases: {
              account: 'mdiAccount'
            }
          }
        }
      }
    }
  }
})
```

### fa-svg

You only need to add `@fortawesome/fontawesome-svg-core`, `@fortawesome/vue-fontawesome` and `@fortawesome/free-solid-svg-icons` dependencies to your project and configure the default set:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa-svg'
      }
    }
  }
})
```

You can also add more libraries and install them in your project, the module will register them for you (this is the default configuration using the above configuration):
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa-svg',
        svg: {
          fa: {
            libraries: [
              [/* default export? */ false, /* export name */ 'fas', /* library */ '@fortawesome/free-solid-svg-icons']
            ]
          }
        }
      }
    }
  }
})
```

## 📦 Multiple Icon Sets

You can register multiple icons sets adding them to the sets array, don't forget to add the default set, otherwise 'mdi' will be used:
```ts
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
        sets: ['mdi', 'fa']
      }
    }
  }
})
```

## 🌍 I18n support

> Requires latest [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/) Nuxt module: `8.0.0.beta.13`.

You can check the playground folder, you can run it using single or multiple json files per locale:
- for single file per locale: run from root folder `pnpm install && nr dev:prepare && nr dev`
- for multiple files per locale: run from root folder `pnpm install && nr dev:prepare:multiple-json && nr dev:multiple-json`

## 📆 Date components support

Right now you can only use Vuetify adapter, there is a bug and will not work, I'm working on it: https://github.com/userquin/vuetify-nuxt-module/pull/9#issuecomment-1620023814.

To use Vuetify components [that require date functionality](https://vuetifyjs.com/en/features/dates/):
- install one of the [@date-io](https://github.com/dmtrKovalenko/date-io#projects) adapters (optional)
- configure the date entry in your Vuetify configuration:
  ```ts
  vuetifyOptions: {
    date: {
      adapter: 'vuetify' // 'vuetify' | 'date-fns' | 'moment' | 'luxon' | 'dayjs' | 'js-joda' | 'date-fns-jalali' | 'jalaali' | 'hijri' | 'custom'
    }
  }
  ```

If you also have `@nuxtjs/i18n` module installed, `vuetifyOptions.date.locale` will be automatically configured, beware, the configured `locale` entry will be ignored.

If you want to use a custom date adapter, you can configure it using `vuetifyOptions.date.adapter = 'custom'`, and then:
- add a Nuxt Plugin and add the `vuetify:configuration` hook to configure your Vuetify options
- you can import the `virtual:vuetify-date-configuration` module, you will have access to the configuration:
  ```ts
  import { adapter, dateConfiguration, i18n } from 'virtual:vuetify-date-configuration'
  ```

Check out [vuetify-date](https://github.com/userquin/vuetify-nuxt-module/blob/main/src/runtime/plugins/vuetify-date.mts) plugin for an example of a custom date adapter and how to access to the configuration.

## ⚙️ Auto-Import Vuetify Composables

No more Vuetify composables manual imports, auto import is enabled by default:
- [useDate](https://vuetifyjs.com/en/api/use-date/)
- [useDefaults](https://vuetifyjs.com/en/api/use-defaults/)
- [useDisplay](https://vuetifyjs.com/en/api/use-display/)
- [useLayout](https://vuetifyjs.com/en/api/use-layout/)
- [useLocale](https://vuetifyjs.com/en/api/use-locale/)
- [useRtl](https://vuetifyjs.com/en/api/use-rtl/)
- [useTheme](https://vuetifyjs.com/en/api/use-theme/)

You can disable auto-import using `moduleOptions.importComposables: false`.

If you are using another composables that collide with the Vuetify ones, enable `moduleOptions.prefixComposables: true` to prefix them with `V`:
- `useLocale` => `useVLocale`
- `useDefaults` => `useVDefaults`
- `useDisplay` => `useVDisplay`
- `useLayout` => `useVLayout`
- `useRtl` => `useVRtl`
- `useTheme` => `useVTheme`


## 🎨 Vuetify Blueprints

The module supports Vuetify Blueprints, just add it to the `vuetifyOptions.blueprint` module option, but with some limitations:
- `ssr` will be ignored, this flag can be only configured internally by the module via the Nuxt ssr option
- `components` will be ignored, configure them using the `vuetifyOptions.components` module option
- `directives` will be ignored, configure them using the `vuetifyOptions.directives` module option
- `locale` will be ignored, configure it using the `vuetifyOptions.locale` module option
- `date` will be ignored, configure it using the `vuetifyOptions.date` module option
- `icons` will be ignored, configure it using the `vuetifyOptions.icons` module option

## 👀 Full config

Check out the type declaration [src/types.ts](https://github.com/userquin/vuetify-nuxt-module/blob/main/src/types.ts).

The virtual modules can be found in [configuration.d.ts](https://github.com/userquin/vuetify-nuxt-module/blob/main/configuration.d.ts) file.

## 📄 License

[MIT](https://github.com/userquin/vuetify-nuxt-module/blob/main/LICENSE) License &copy; 2023-PRESENT [Joaquín Sánchez](https://github.com/userquin)
