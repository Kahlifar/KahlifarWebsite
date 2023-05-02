<template>
  <div class="event-card">
    <!-- {{ eventData }} -->
    <img
      class="event-card__thumbnail"
      :src="
        'https://cms.kahlifar.de' +
        eventData.attributes.Thumbnail.data.attributes.url
      "
      :alt="eventData.attributes.Title + ' Thumbnail'"
    />
    <div class="event-card__content">
      <span v-if="eventData" class="event-card__title">{{
        eventData.attributes.Title ? eventData.attributes.Title : ""
      }}</span>
      <p
        class="event-card__description"
        v-html="
          eventData.attributes.End
            ? `${parseMarkdown(eventData.attributes.Description)}`
            : ''
        "
      ></p>
      <span class="event-card__start-date">
        <span class="material-icons"> event </span>
        {{
          eventData.attributes.Start
            ? `${formatDateTimestamp(
                eventData.attributes.Start
              )} (${getRelativeTime(eventData.attributes.Start)}) `
            : ""
        }}
      </span>
      <span class="event-card__end-date">
        <span class="material-icons"> event </span>
        {{
          eventData.attributes.End
            ? `${formatDateTimestamp(eventData.attributes.End)}`
            : ""
        }}
      </span>
      <span class="event-card__location">
        <span class="material-icons"> location_on </span>
        {{ eventData.attributes.Place ? eventData.attributes.Place : "" }}
      </span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { marked } from "marked";
export default {
  name: "EventCard",
  props: {
    eventData: {
      type: Object,
      required: false,
    },
    eventId: {
      type: String,
      required: false,
    },
  },
  async fetch() {
    if (this.eventId) {
      this.eventData = await this.$axios.get(
        `${process.env.CMS_URL}/api/events/${this.eventId}`
      );
    }
  },
  mounted() {
    if (this.eventData) {
      return;
    } else {
      this.fetch();
    }
  },
  methods: {
    parseMarkdown(markdown) {
      return marked.parseInline(markdown, { breaks: true });
    },
    formatDateTimestamp(timestamp) {
      return moment(timestamp).format("DD.MM.YYYY, HH:mm:ss");
    },
    getRelativeTime(timestamp) {
      return moment(timestamp).fromNow();
    },
  },
};
</script>