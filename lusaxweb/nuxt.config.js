const pkg = require('./package.json')


module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  generate: {
    dir: 'public',
    fallback: "404.html"
  },
  mode: 'universal',
  srcDir: 'app',
  debug: true,
  router: {
    middleware: [
      'delay',
      'i18n'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    // title: 'Lusaxweb - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' },
      { name: 'author', content: 'Lusaxweb' },
      { name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'description', name: 'description', content: pkg.description },
      // Open Graph
      { property: 'og:image', content: 'https://lusaxweb.net/default.png' },
      { property: 'og:description', content: pkg.description },
      { property: 'og:title', content: 'Lusaxweb - Digital creative agency'},
      { property: 'og:url', content: 'https://lusaxweb.net/'},
      { name: 'twitter:card', content: 'summary_large_image'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/lusaxweb-favicon.png' },
      { rel: 'canonical', href: 'https://lusaxweb.net/'},
      // { href: `${(process.env.NODE_ENV !== 'production')?'':'https://fonts.googleapis.com/css?family=Poppins&display=swap'}`, rel: 'stylesheet' },

    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  loading: '~/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    './style/app.styl',
    '~/assets/font/flaticon.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/firebase.js',
    '~/plugins/utils.js',
    '~/plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: 'Lusaxweb - Digital creative agency',
    lang: 'en',
    theme_color: '#0f0f13'
  },

  /*
  ** Build configuration
  */

  build: {
    publicPath: '/assets/',
    // analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
