export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kahlifar - Community Page',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kahlifar ist eine Community die sich für das zocken interessiert. Minecraft, VALORANT und vieles mehr. Hier findest du garantiert einen Spielpartner.' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: `Kahlifar Communtiy`,
      },
      {
        property: 'og:type',
        content: `website`,
      },
      {
        property: 'og:description',
        content: `Kahlifar ist eine Community die sich für das zocken interessiert. Minecraft, VALORANT und vieles mehr. Hier findest du garantiert einen Spielpartner`,
      },
      {
        property: 'og:image',
        content: '@/assets/images/logo_background.png',
      },
      { name: 'msapplication-TileColor', content: '#023047' },
      { name: 'theme-color', content: '#023047' },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/global.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content',
    // 'vue-typer',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  styleResources: {
    scss: ['./assets/css/global/*.scss']
  },
}
