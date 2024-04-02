// eslint-disable-next-line
/// <reference types="vitest" />
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import angular from "@analogjs/vite-plugin-angular";
import tsconfigPaths from "vite-tsconfig-paths";
import tsNameof from "vite-plugin-ts-nameof";
import * as path from "path";

export default defineConfig(({ mode }) => ({
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "./src/app"),
		},
	},
	plugins: [
		tsNameof(),
		angular({ inlineStylesExtension: "scss", tsconfig: "tsconfig.json" }),
		checker({ typescript: true }),
		tsconfigPaths(),
	],
	optimizeDeps: {
		esbuildOptions: {
			tsconfig: "tsconfig.json",
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: [ "src/styles/_helpers", "node_modules" ],
			},
		},
	},
	server: {
		port: 4200,
	},
	test: {
		setupFiles: "src/test-setup.ts",
		globals: true,
		environment: "jsdom",
		include: [ "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}" ],
		reporters: [ "default" ],
	},
	publicDir: "src/assets/",
	define: {
		"import.meta.vitest": mode !== "production",
	},
}));
