<template>
  <div class="default-content">
    <h1>Socials</h1>
    <p>
      Unsere Community ist auf verschiedensten Plattformen vertreten. Wir teilen
      Bilder oder einfach tolle News. <br>
      So können wir neue Member erreichen und das Erlebnis in der Community noch besser machen.

      <b> Hilf uns zu wachsen und folge allen Kanälen </b>
    </p>
    
    <div class="socials">
      <span v-if="$fetchState.pending">Leading Socials...</span>
      <span v-else-if="$fetchState.error">Error: {{ $fetchState.error.message }}</span>
      <SocialCard v-else v-for="social in socials" :key="social.id"
        :socialData="social.attributes">
      </SocialCard>
    </div>
  </div>
</template>

<script>
const { defaultTitle } = require("~/assets/data/properties");
export default {
  head() {
    return {
      title: `${defaultTitle}Socials`,
    };
  },
  data() {
    return {
      socials: [],
    };
  },
  async fetch() {
    this.socials = (
      await this.$axios.get(`https://cms.kahlifar.de/api/socials?populate=*`)
    ).data.data;
  },
};
</script>

<style>
</style>