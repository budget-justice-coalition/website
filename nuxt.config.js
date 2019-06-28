
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Budget Justice SA Coming Soon',
    meta: [
      { name: 'title', content: 'Budget Justice SA Coming Soon' },
      { name: 'description', content: 'Budget Justice SA web site' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: '/fonts/Montserrat-Bold.woff2', type: 'font/woff2', crossorigin: true },
      { rel: 'preload', as: 'font', href: '/fonts/Montserrat-Regular.woff2', type: 'font/woff2', crossorigin: true },
      { rel: 'canonical', href: 'https://budgetjusticesa.org' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/svg/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/static/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/load-sw.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
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
