import NuxtSVGO from '../../../src/module'

export default defineNuxtConfig({
  modules: [NuxtSVGO],
  svgo: {
    svgo: false
  }
})
