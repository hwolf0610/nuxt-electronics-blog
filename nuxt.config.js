
const env = require('dotenv').config()

console.log(env)

export default {
  mode: 'universal',
  env: env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ],
    script: [
      // {src: '/ace/ace.js'}
      { src: 'https://www.paypal.com/sdk/js?client-id=ASFdXLU0llnPQcKJdaFzUQKNAM0jcUP7ng5MVDJp1p15BNspcJYLDFU-U1uqrDI-O2VKQxZqnZwNVqfF' }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff00c7' },
  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    '@/assets/css/customcss.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/datepicker', ssr: false },
    { src: '~/plugins/clickoutside', ssr: false },
    { src: '~/plugins/dragged-plugin.js', ssr: false },
    { src: '~/plugins/apex-chart-plugin.js', ssr: false },
    { src: '~/plugins/ace-editor-plugin.js', ssr: false },
    { src: '~/plugins/scrollbar-plugin.js', ssr: false },
    { src: '~/plugins/notification-plugin.js', ssr: false },
    { src: '~/plugins/table-plugin.js' },
    { src: '~/plugins/vue2-filters-plugin' },
    { src: '~/plugins/calendar.js', ssr: false, mode: 'client' },
    { src: '~/plugins/firebase.js', ssr: false, mode: 'client' },
    { src: '~/plugins/jspdf.js', ssr: false, mode: 'client' },
    { src: '~/plugins/vue-carousal.js', ssr: false, mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    ['cookie-universal-nuxt', { alias: 'cookies' }],
    ['nuxt-stripe-module', {
      /* module options */
      version: 'v3', // Default,
      publishableKey: 'pk_test_3jHRUbrWywqszV6R6uBuh48o00m6odH81C'
    }],
  ],
  /**
   * Router Middleware
   */
  router: {
    middleware: 'router',
    linkActiveClass: 'active-link'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
