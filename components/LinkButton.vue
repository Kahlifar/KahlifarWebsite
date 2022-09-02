<template>
  <div class="link-button">
    <nuxt-link v-if="!isExternalLink(href)" :to="href" :target="target" class="link-button__link">
      <span class="material-icons first-icon" v-if="icon !== ''">{{
        icon.toLowerCase()
      }}</span>
      {{ title }}
      <span class="material-icons" v-if="showArrow"> chevron_right </span>
    </nuxt-link>
    <a v-else :href="href" :target="target" class="link-button__link">
      <span class="material-icons first-icon" v-if="icon !== ''">{{
        icon.toLowerCase()
      }}</span>
      {{ title }}
      <span class="material-icons" v-if="showArrow"> chevron_right </span>
    </a>
  </div>
</template>

<script>
export default {
  async asyncData({ req, res } ) {
    if (process.server) {
      return { host: req.headers.host }
    }
  },
  props: {
    title: {
      type: String,
      default: "Button",
    },
    href: {
      type: String,
      default: "#",
    },
    target: {
      type: String,
      default: "_self",
    },
    icon: {
      type: String,
      default: "",
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    isExternalLink: (url) => {
      if (url.startsWith("http")) {
        return true;
      }
      return false
    },
  },
};
</script>