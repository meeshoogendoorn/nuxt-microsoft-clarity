import { fileURLToPath } from 'url';
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  delay: number;
  key: string | null;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-microsoft-clarity',
    configKey: 'clarity',
  },
  defaults: {
    delay: 1,
    key: null,
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.clarity = options;

    if (options.key) {
      const { resolve } = createResolver(import.meta.url);
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, 'clarity.client'));
    }
  },
});
