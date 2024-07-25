// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: {enabled: true},
	css: ["reset-css/reset.css", "~/assets/scss/main.scss"],
	modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss", '@pinia/nuxt'],
	shadcn: {
		prefix: "Ui",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui-kit"
		 */
		componentDir: "./components/ui-kit",
	},
	alias: {
		// Этот alias нужен для корректной работы @pinia/nuxt, т.к. в текущей версии идет конфликт с npm и он начинает ругаться на зависимости
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
	},
});
