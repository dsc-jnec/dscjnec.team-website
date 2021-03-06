export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DSC JNEC - Join Us!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Developer Community for passionate students',
      },
      {
        name: 'keywords',
        content: 'DSCJNEC, jnec, communities, learn to develop',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dscjnec.team/logo.svg',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'https://dscjnec.team/logo.svg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dscjnec.team/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'dsclogo.svg' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuesax/dist/vuesax.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vuesax'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-180348067-1',
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  pwa: {
    manifest: {
      name: 'DSC JNEC',
    },
    meta: {
      /* meta options */
      name: 'DSC JNEC',
      ogTitle: 'DSC JNEC',
    },
  },
}
