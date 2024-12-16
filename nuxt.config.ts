import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

export default defineNuxtConfig({
	build: {
		transpile: ["vuetify"],
	},

	modules: [
		"nuxt-monaco-editor",
		"@pinia/nuxt",
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
	],

	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	imports: {
		dirs: ["./types", "./stores"],
	},

	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
})
