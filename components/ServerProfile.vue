<template>
  <div class="server-profile">
    <img class="server-profile__banner" :src="`${CMS_URL}${serverData.Banner.data.attributes.url }`" alt="">
    <div class="server-profile__content">
      <div class="server-profile__info">
        <h2 class="server-profile__info__title">{{ serverData.Name }}</h2>
        <h3 class="server-profile__info__subtitle">Beschreibung:</h3>
        <p
          class="server-profile__info__description"
          v-html="parsetoMarkdown(serverData.Description)"
        ></p>
        <h3 v-if="serverData.Requirements" class="server-profile__info__subtitle">Vorraussetzungen:</h3>
        <p
        v-if="serverData.Requirements"
          class="server-profile__info__prerequisites"
          v-html="parsetoMarkdown(serverData.Requirements)"
        ></p>
      </div>
      <div class="server-profile__game">
        <img
          class="server-profile__game__image"
          :src="`${CMS_URL}${serverData.AppLogo.data.attributes.url}`"
          :alt="`${serverData.AppName} Logo`"
        />
        <span class="server-profile__game__name">{{ serverData.AppName }}</span>
        <span class="server-profile__game__version" v-if="serverData.AppVersion">{{ serverData.AppVersion }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { marked } from "marked";
export default {
  props: {
    serverData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      CMS_URL: process.env.CMS_URL,
    };
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