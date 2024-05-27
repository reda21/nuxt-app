// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-auth-sanctum",
   // "@nuxtjs/axios",
    //"@nuxtjs/auth-next",
  ],
  runtimeConfig: {
    public: {
      sanctum: {
        baseUrl: "http://lara11.me", // Laravel API
      },
    },
  },
});
