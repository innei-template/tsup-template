import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'es2020',
  entry: ['src/index.ts'],
  external: ['lodash', 'lodash-es'],
  dts: true,
  format: ['cjs', 'esm', 'iife'],
})
