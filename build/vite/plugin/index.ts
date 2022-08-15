import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'

import { configIconsPlugin } from './icons'
import { configCompressionPlugin } from './compress'

export function createVitePlugins(_env: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()]

  // unocss
  vitePlugins.push(unocss())

  // icons
  vitePlugins.push(configIconsPlugin(isBuild))

  // The following plugins only work in the production environment
  if (isBuild) {
    // gzip
    vitePlugins.push(configCompressionPlugin('gzip', false))
  }

  return vitePlugins
}
