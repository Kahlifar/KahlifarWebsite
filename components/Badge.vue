<template>
  <span class="badge"
    :class="style">
    <span v-if="firstIcon" class="badge__first-icon material-icons"></span>
    <span class="badge__text">{{ text }}</span>
    <span v-if="secondIcon" class="badge__last-icon material-icons"></span>
  </span>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        firstIcon: {
            type: String,
            required: false
        },
        secondIcon: {
            type: String,
            required: false
        },
        style: {
            type: String,
            required: false
        }
    }
}
</script>

<style>

</style>