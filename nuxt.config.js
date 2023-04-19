import { discordInviteLink, instagramLink, youtubeLink, twitterLink, twitchLink, esportInviteLink, topggLink } from './assets/data/properties'

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
      { name: "google-site-verification", content: "B5LbS7mhVb68dbwfoDL8nVceufZrOaAN7LxRLFLdmRU" },
      { hid: 'description', name: 'description', content: 'Kahlifar ist eine Community die sich für das zocken interessiert. Minecraft, VALORANT und vieles mehr. Hier findest du garantiert einen Spielpartner.' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: `Kahlifar Community`,
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
        content: '~/assets/images/logo_background.png',
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
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  serverMiddleware: [
    { path: '/api/discord', handler: '~/api/discordAPI.js' }
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  sitemap: {
    hostname: 'https://kahlifar.de',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    routes: [
      '/server',
      '/team',
      '/socials',
      '/discord',
      '/youtube',
      '/twitter',
      '/twitch',
      '/instagram',
      '/cd/**'
    ]
  },
  redirect: [
    { from: '/discord', to: discordInviteLink },
    { from: '/instagram', to: instagramLink },
    { from: '/youtube', to: youtubeLink },
    { from: '/twitter', to: twitterLink },
    { from: '/twitch', to: twitchLink },
    { from: '/topgg', to: topggLink },
    { from: '/esport', to: esportInviteLink },
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  styleResources: {
    scss: ['./assets/css/global/*.scss']
  },
}
