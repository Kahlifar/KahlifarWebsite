<template>
  <footer class="footer">
    <div class="footer__content">
      <span>{{ footer }}</span>
      <span>Copyright © 2022 <nuxt-link to="/" >kahlifar.de</nuxt-link>, All rights reserved.</span>
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