import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  splitting: false,
  minify: false,
  keepNames: true,
  dts: true,
  clean: true,
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
