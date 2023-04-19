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
    <p data-v-0d12176a="">
      Wir heissen dich vom Owner und Modteam sehr gerne wilkommen. Bei uns dreht
      sich alles über den Discord also joine gerne
      <a
        href="http://dc.kahlifar.de/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        >hier</a
      >.
    </p>
    <h2>Events</h2>
    <div v-if="$fetchState.error" class="news-section">
      <p>Es ist ein Fehler aufgetreten</p>
    </div>
    <div v-else-if="$fetchState.pending" class="news-section">
      <p>Es werden Daten geladen...</p>
    </div>
    <div v-else class="news-section">
      <p class="news-section__no-events" v-if="events.length === 0">Es sind momenan keine Events geplant.</p>
      <EventCard v-else v-for="(event) in events" :key="event.id" 
        :eventData="event">
      </EventCard>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      events: [],
    };
  },
  async fetch() {
    this.events = (
      await this.$axios.get(`${process.env.CMS_URL}/api/events?populate=*`)
    ).data.data;
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .news-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__no-events {
      font-size: 1.2rem;
      font-weight: 500;
      color: $black-60;
    }
  }
}
</style>
