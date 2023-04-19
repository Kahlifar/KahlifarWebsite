<template>
  <div class="default-content">
    <h1>Socials</h1>
    <p>
      Unsere Community ist auf verschiedensten Plattformen vertreten. Wir teilen Bilder oder einfach tolle News. So können wir neue Member erreichen und das Erlebnis in der Community noch
      besser machen. <br>
      <br>
      <b> Hilf uns zu wachsen und folge allen Kanälen </b>
    </p>

    <span v-if="$fetchState.pending">Loading Socials...</span>
    <span v-else-if="$fetchState.error"
      >Error: {{ $fetchState.error.message }}</span
    >
    <div v-else class="socials">
      <SocialCard
        v-for="social in socials"
        :key="social.id"
        :socialData="social.attributes"
      >
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
      // Read the env from the context
      await this.$axios.get(`${process.env.CMS_URL}/api/socials?populate=*`)
    ).data.data;
  },
};
</script>

<style>
</style>