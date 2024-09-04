// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['reset-css/reset.css', '~/assets/scss/main.scss'],
	modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint', 'nuxt-svgo', '@vee-validate/nuxt'],
	veeValidate: {
		autoImports: true,
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			FieldArray: 'VeeFieldArray',
			ErrorMessage: 'VeeErrorMessage',
		},
	},
	shadcn: {
		prefix: 'Ui',
		componentDir: './components/ui-kit',
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				braceStyle: 'allman',
			},
		},
	},
	runtimeConfig:
		{
			public:
				{
					baseUrl: process.env.BASE_URL || '',
				},
		},
});
