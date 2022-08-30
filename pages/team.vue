<template>
    <div class="default-content">
        <nuxt-content :document="doc" />
    </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("team").fetch();
    return { doc };
  },
};
</script>

<style>
</style>