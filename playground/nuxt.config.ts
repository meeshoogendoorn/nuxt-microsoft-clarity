import { defineNuxtConfig } from 'nuxt/config';
import MyModule from '..';

export default defineNuxtConfig({
  modules: ['nuxt-microsoft-clarity'],
  clarity: {
    delay: 1,
    key: 'YOUR_CLARITY_KEY',
  },
});
