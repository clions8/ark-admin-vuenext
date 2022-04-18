import type { ProjectConfig } from '/#/config'

import { computed } from 'vue'
import { useAppStore } from '/@/stores/modules/app'

type RootSetting = Omit<
  ProjectConfig,
  'menuSetting' | 'elementUISetting' | 'headerSetting' | 'transitionSetting'
>

export function useRootSetting() {
  const appStore = useAppStore()

  const getGrayMode = computed(() => appStore.getProjectConfig.grayMode)

  const getShowBreadCrumb = computed(() => appStore.getProjectConfig.showBreadCrumb)

  const getShowFooter = computed(() => appStore.getProjectConfig.showFooter)

  const getThemeColor = computed(() => appStore.getProjectConfig.themeColor)

  const getColorWeak = computed(() => appStore.getProjectConfig.colorWeak)

  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo)

  const getContentMode = computed(() => appStore.getProjectConfig.contentMode)

  const getRemoveAllHttpPending = computed(() => appStore.getProjectConfig.removeAllHttpPending)

  function setRootSetting(setting: Partial<RootSetting>) {
    appStore.setProjectConfig(setting)
  }

  return {
    setRootSetting,

    getContentMode,
    getRemoveAllHttpPending,
    getShowLogo,
    getColorWeak,
    getThemeColor,
    getGrayMode,
    getShowBreadCrumb,
    getShowFooter,
  }
}
