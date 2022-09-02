<template>
  <div class="server-profile">
    <div class="server-profile__content">
      <h2 class="server-profile__content__title">{{ title }}</h2>
      <h3 class="server-profile__content__subtitle">Beschreibung:</h3>
      <p
        class="server-profile__content__description"
        v-html="parsetoMarkdown(description)"
      ></p>
      <h3 class="server-profile__content__subtitle">Vorraussetzungen:</h3>
      <p
        class="server-profile__content__prerequisites"
        v-html="parsetoMarkdown(prerequisites)"
      ></p>
    </div>
    <div class="server-profile__game">
      <img
        class="server-profile__game__image"
        :src="require(`~/assets/images/server/${gameImage}`)"
        :alt="`${gameName} Logo`"
      />
      <span class="server-profile__game__name">{{ gameName }}</span>
      <span class="server-profile__game__version">{{ gameVersion }}</span>
    </div>
  </div>
</template>
<script>
import { marked } from "marked";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prerequisites: {
      type: String,
      required: false,
    },
    gameImage: {
      type: String,
      required: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    gameVersion: {
      type: String,
      required: false,
    },
  },
  methods: {
    parsetoMarkdown(text) {
      return marked.parseInline(text, { breaks: true });
    },
  },
};
</script>

<style>
</style>