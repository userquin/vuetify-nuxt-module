// @unocss-include DON'T FORGET TO ADD THIS COMMENT
import { mdi } from 'vuetify/lib/iconsets/mdi'
import { iconsConfiguration } from 'virtual:vuetify-icons-configuration'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
    /* BEGIN: this block and the virtual:vuetify-icons-configuration import not required in your plugin */
    const icons = iconsConfiguration()
    const apply = icons?.defaultSet === 'custom'
    if (!apply)
      return
    /* END: this block and the import not required in your plugin */

    vuetifyOptions.icons = {
      defaultSet: 'mdi',
      sets: { mdi },
      aliases: {
        collapse: 'i-mdi:chevron-up',
        complete: 'i-mdi:check',
        cancel: 'i-mdi:close-circle',
        close: 'i-mdi:close',
        delete: 'i-mdi:close-circle',
        // delete (e.g. v-chip close)
        clear: 'i-mdi:close-circle',
        success: 'i-mdi:check-circle',
        info: 'i-mdi:information',
        warning: 'i-mdi:alert-circle',
        error: 'i-mdi:close-circle',
        prev: 'i-mdi:chevron-left',
        next: 'i-mdi:chevron-right',
        checkboxOn: 'i-mdi:checkbox-marked',
        checkboxOff: 'i-mdi:checkbox-blank-outline',
        checkboxIndeterminate: 'i-mdi:minus-box',
        delimiter: 'i-mdi:circle',
        // for carousel
        sortAsc: 'i-mdi:arrow-up',
        sortDesc: 'i-mdi:arrow-down',
        expand: 'i-mdi:chevron-down',
        menu: 'i-mdi:menu',
        subgroup: 'i-mdi:menu-down',
        dropdown: 'i-mdi:menu-down',
        radioOn: 'i-mdi:radiobox-marked',
        radioOff: 'i-mdi:radiobox-blank',
        edit: 'i-mdi:pencil',
        ratingEmpty: 'i-mdi:star-outline',
        ratingFull: 'i-mdi:star',
        ratingHalf: 'i-mdi:star-half-full',
        loading: 'i-mdi:cached',
        first: 'i-mdi:page-first',
        last: 'i-mdi:page-last',
        unfold: 'i-mdi:unfold-more-horizontal',
        file: 'i-mdi:paperclip',
        plus: 'i-mdi:plus',
        minus: 'i-mdi:minus',
        calendar: 'i-mdi:calendar',
      },
    }
  })
})
