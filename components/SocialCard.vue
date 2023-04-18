<template>
  <div class="social-card">
    <div class="social-card__content">
      <div class="social-card__content__head">
        <img
          class="social-card__content__head__logo"
          :src="platformLogoURL"
          :alt="`${platformName} Logo`"
        />
        <span class="social-card__content__head__title"
          >{{ platformName }}: {{ accountName }}</span
        >
        <div
          class="social-card__content__head__badges">
            <!-- <Badge v-if="live && isLive" text="Live" firstIcon="circle" type="live" ></Badge> -->
        </div>
      </div>
      <p
        class="social-card__content__description"
        v-html="parseToMarkdown(description)"
      ></p>
    </div>
    <div class="social-card__button">
        <LinkButton
          class="lighblue"
          :href="link"
          :title="platformName"
          target="_blank"
        />
      </div>
  </div>
</template>

<script>
import { marked } from "marked";
// import { isLive } from "~/helpers/twitch/isLive"
export default {
  data() {
    return {
      platformLogoURL: "",
      platformName: "",
      accountName: "",
      link: "" ,
      description: "",
      // isLive: false,
    };
  },
  props: {
    socialData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    parseToMarkdown(text) {
      return marked.parseInline(text, { breaks: true });
    },
  },
  async mounted() {
    this.platformLogoURL = "https://cms.kahlifar.de" + this.socialData.Logo.data.attributes.url;
    this.platformName = this.socialData.Name;
    this.accountName = this.socialData.Username;
    this.link = this.socialData.URL;
    this.description = this.socialData.Description;
  },
};
</script>

<style>
</style>