import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/mini-games/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        janken: fileURLToPath(
          new URL('./games/janken/index.html', import.meta.url),
        ),
        numberGuess: fileURLToPath(
          new URL('./games/number-guess/index.html', import.meta.url),
        ),
        typing: fileURLToPath(
          new URL('./games/typing/index.html', import.meta.url),
        ),
      },
    },
  },
});
