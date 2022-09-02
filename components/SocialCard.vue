<template>
  <div class="social-card">
    <div class="social-card__content">
      <div class="social-card__content__head">
        <img
          class="social-card__content__head__logo"
          :src="require(`~/assets/images/socials/${platformLogo}`)"
          :alt="`${platformName} Logo`"
        />
        <span class="social-card__content__head__title"
          >{{ platformName }}: {{ accountName }}</span
        >
      </div>
      <p
        class="social-card__content__description"
        v-html="parseToMarkdown(description)"
      ></p>
    </div>
    <div class="social-card__button">
        <LinkButton
          :class="buttonTheme"
          :href="link"
          :title="platformName"
          target="_blank"
        />
      </div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  props: {
    platformLogo: {
      type: String,
      required: true,
    },
    platformName: {
      type: String,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    buttonTheme: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    parseToMarkdown(text) {
      return marked.parseInline(text, { breaks: true });
    },
  },
};
</script>

<style>
</style>