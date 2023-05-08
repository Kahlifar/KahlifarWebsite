<template>
  <footer class="footer">
    <div class="footer__start">
      <a href="/imprint">Impressum</a>
    </div>
    <div class="footer__content">
      <span>{{ footer }}</span>
      <span
        >Copyright © 2022 <nuxt-link to="/">kahlifar.de</nuxt-link>, All rights
        reserved.</span
      >
    </div>
    <div class="footer__end">
      <a href="/privacypolicy">Datenschutzbestimmung</a>
    </div>
  </footer>
</template>

<script>
import { defaultFooter } from "~/assets/data/properties";
export default {
  props: {
    footer: {
      type: String,
      default: defaultFooter,
    },
  },
};
</script>