<template>
  <span class="badge"
    :class="type">
    <span v-if="firstIcon" class="badge__first-icon material-icons">{{ firstIcon }}</span>
    <span class="badge__text">{{ text }}</span>
    <span v-if="secondIcon" class="badge__last-icon material-icons">{{ secondIcon }}</span>
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
        type: {
            type: String,
            required: false
        }
    }
}
</script>

<style>

</style>