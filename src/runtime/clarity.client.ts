import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import './types';

const onLoad = (callback: Function, delay: number = 1) => {
  if (document.readyState === 'complete') {
    setTimeout(() => callback(), delay);
  } else {
    window.addEventListener('load', function () {
      setTimeout(() => callback(), delay);
    });
  }
};

export default defineNuxtPlugin(() => {
  const { clarity } = useRuntimeConfig();

  const { delay, key } = clarity;

  onLoad(() => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', key);
  }, delay);
});
