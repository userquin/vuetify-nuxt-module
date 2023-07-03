<p align='center'>
<img src='./hero.svg' alt="vuetify-nuxt-module - Zero-config Nuxt module for Vuetify"><br>
Zero-config Nuxt module for Vuetify
</p>

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

- 📖 [**Documentation & guides**](README.md#-features) (WIP)
- 👌 **Zero-Config**: sensible built-in default [Vuetify](https://vuetifyjs.com/) configuration for common use cases
- 🔩 **Extensible**: expose the ability to customize the Vuetify configuration via [Nuxt Plugin Hooks](https://nuxt.com/docs/guide/going-further/hooks#usage-with-plugins)
- ⚡ **Fully Tree Shakable**: by default, only the needed Vuetify components are imported
- 🛠️ **Versatile**: custom Vuetify [directives](https://vuetifyjs.com/en/getting-started/installation/#manual-steps) and [labs components](https://vuetifyjs.com/en/labs/introduction/) registration
- ✨ **Configurable Styles**: configure your variables using [Vuetify SASS Variables](https://vuetifyjs.com/en/features/sass-variables/) 
- 💥 **SSR**: automatic SSR detection and configuration
- 🌍 **I18n Ready**: install [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/) Nuxt module, and you're ready to use Vuetify [internationalization](https://vuetifyjs.com/en/features/internationalization/) features
- 📆 **Date Components**: use Vuetify components [that require date functionality](https://vuetifyjs.com/en/features/dates/) installing and configuring one of the [@date-io](https://github.com/dmtrKovalenko/date-io#projects) adapters
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

## 🦄 Usage

> `vuetify-nuxt-module` is strongly opinionated and has a built-in default configuration out of the box. You can use it without any configuration, and it will work for most use cases.

Add `vuetify-nuxt-module` module to `nuxt.config.ts` and configure it:

```ts
// nuxt.config.ts
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

<!--
Read the [📖 documentation](https://vite-pwa-org.netlify.app/frameworks/nuxt) for a complete guide on how to configure and use
this plugin.
-->


## 🌍 I18n support

> Requires latest [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/) Nuxt module: `8.0.0.beta.12`.

There is a [bug](https://github.com/nuxt-modules/i18n/pull/2193) in the current version that prevents `@nuxtjs/i18n` module to work properly when using `lazy` i18n files.

If you're using `lazy` i18n files per locale, apply [this patch](./patches/@nuxtjs__i18n@8.0.0-beta.12.patch) to your project: check how to apply it when using `pnpm` in the root `package.json` file in this repo: [package.json](./package.json#L97-L101).

You can check the playground folder, you can run it using single or multiple json files per locale:
- for single file per locale: run from root folder `pnpm install && nr dev:prepare && nr dev`
- for multiple files per locale: run from root folder `pnpm install && nr dev:prepare:multiple-json && nr dev:multiple-json`

## 📆 Date components support

To use Vuetify components [that require date functionality](https://vuetifyjs.com/en/features/dates/):
- install one of the [@date-io](https://github.com/dmtrKovalenko/date-io#projects) adapters
- configure the date entry in your Vuetify configuration:
  ```ts
  vuetifyOptions: {
    date: {
      adapter: 'vuetify' // 'vuetify' | 'date-fns' | 'moment' | 'luxon' | 'dayjs' | 'js-joda' | 'date-fns-jalali' | 'jalaali' | 'hijri' | 'custom'
    }  
  }
  ```

If you also have `@nuxtjs/i18n` module installed, `vuetifyOptions.date.locale` will be automatically configured, ignoring the `locale` entry configured.

If you want to use a custom date adapter, you can configure it using `vuetifyOptions.date.adapter = 'custom'`, and then:
- add a Nuxt Plugin and add the `vuetify:configuration` hook to configure your Vuetify options
- you can import the `virtual:vuetify-date-configuration` module, you will have access to the configuration:
  ```ts
  import { adapter, dateConfiguration, i18n } from 'virtual:vuetify-date-configuration'
  ```

Check out [vuetify-date](./src/runtime/plugins/vuetify-date.mts) plugin for an example of a custom date adapter and how to access to the configuration.

## 👀 Full config

**WIP**
<!--
Check out the type declaration [src/types.ts](./src/types.ts) and the following links for more details.

- [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Workbox](https://developers.google.com/web/tools/workbox)
-->

## 📄 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Joaquín Sánchez](https://github.com/userquin)
