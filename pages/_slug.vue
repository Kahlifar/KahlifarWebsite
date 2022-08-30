<template>
  <div class="default-content">
      <nuxt-content :document="doc" />
  </div>
</template>

<script>
const { defaultTitle } = require('~/assets/data/properties')
export default {
    async asyncData( {$content, params }) {
        const doc = await $content(params.slug || "error").fetch()
        return { doc }
    },
    head() {
        return {
            title: `${defaultTitle}${this.doc.title}`,
        };
    },
}
</script>

<style>

</style>