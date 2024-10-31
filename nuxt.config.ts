// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	alias: {
		"@": "../src",
	},

	devServer: {
		port: 3000,
	},

	css: ["~/src/1-app/styles/app.scss"],

	imports: {
		// Отключение автоимпорта composables и utilities
		autoImport: false,
	},

	components: {
		// Отключение автоимпорта компонентов
		dirs: [],
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/src/1-app/styles/base.scss" as *;',
				},
			},
		},
	},

	dir: {
		pages: "./src/1-app/routes",
		layouts: "./src/1-app/layouts",
	},

	compatibilityDate: "2024-07-04",

	runtimeConfig: {
		public: {
			// Переменные устанавливаются в .env при локальной разработке
			// На проде (титан \ хостинг) они заполнятся из ecosystem.config.cjs
			googleRecaptchaSiteKey: "",
			apiBaseUrl: "",
		},
	},

	router: {
		options: {
			scrollBehaviorType: "smooth",
		},
	},
});
