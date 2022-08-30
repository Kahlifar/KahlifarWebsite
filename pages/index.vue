<template>
  <div class="default-content index-page">
    <Typewriter text="Willkommen, auf Kahlifar"></Typewriter>
    <LinkButton
      class="light-blue"
      title="Discord"
      icon="mic"
      href="http://dc.kahlifar.de"
      target="_blank"
    />

    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  layout: "default",
  async asyncData({ $content, params }) {
    const doc = await $content("index").fetch();
    return { doc };
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
