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
        <div class="social-card__content__head__badges">
          <Badge
            v-for="badge in badges"
            :key="badge.id"
            :text="badge.Text"
            :firstIcon="badge.firstIcon ? badge.firstIcon : undefined"
            :secondIcon="badge.secondIcon ? badge.secondIcon : undefined"
            :backgroundColor="badge.BackgroundColor"
            :textColor="badge.TextColor"
          ></Badge>
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
      badges: [],
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
    sortBadges(badges) {
      // Where isActive is true
      return badges.filter((badge) => badge.isActive);
      },
  },      
  async mounted() {
    this.platformLogoURL = "https://cms.kahlifar.de" + this.socialData.Logo.data.attributes.url;
    this.platformName = this.socialData.Name;
    this.accountName = this.socialData.Username;
    this.link = this.socialData.URL;
    this.description = this.socialData.Description;
    this.badges = this.sortBadges(this.socialData.Badges);
  },
};
</script>

<style>
</style>