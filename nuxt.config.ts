// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["reset-css/reset.css", "~/assets/scss/main.scss"],
  modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss"],
  shadcn: {
    prefix: "Ui",
    /**
     * Directory that the component lives in.
     * @default "./components/ui-kit"
     */
    componentDir: "./components/ui-kit",
  },
});
