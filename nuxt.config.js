export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Articles",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  //config using convert client-side => sever-side
  plugins: ["~plugins/vuetify.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Simple usage
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/apollo"],

  //Apollo
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://carmarket.storkyle.com/api/graphql"
      }
    }
    // watchLoading: "~/plugins/apollo-watch-loading-handler.js"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ["vuetify"]
  },
  /**
   * default 'apollo' definition
   */
  defaultOptions: {
    // See 'apollo' definition
    // For example: default query options
    $query: {
      loadingKey: "loading",
      fetchPolicy: "no-cache"
    }
  }
};
