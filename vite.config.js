import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"#components": resolve(
				dirname(fileURLToPath(import.meta.url)),
				"src/components",
			),
			"#constants": resolve(
				dirname(fileURLToPath(import.meta.url)),
				"src/constants",
			),
			"#store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
			"#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
			"#windows": resolve(
				dirname(fileURLToPath(import.meta.url)),
				"src/windows",
			),
		},
	},
});
