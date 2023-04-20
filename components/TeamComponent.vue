<template>
  <div class="team-component">
    <h2 v-if="!$fetchState.pending">{{ teamData.attributes.Title }}</h2>

    <span v-if="$fetchState.pending">Loading Tean...</span>
    <span v-else-if="$fetchState.error">An Error occured.</span>
    <span
      class="team-component__no-profiles"
      v-else-if="teamData.attributes.profiles.data.length == 0"
      >Keine Mitglieder gefunden in dieser Gruppe.</span
    >
    <div v-else-if="teamData && teamData.attributes.profiles.data">
      <p>{{ teamData.attributes.Description }}</p>
      <div class="team-component__profiles">
        <DiscordProfileComponent
          v-for="(profile, index) in teamData.attributes.profiles.data"
          :key="index"
          class="team-component__profiles__profile"
          :style="{ backgroundColor: `${teamData.attributes.Color}` }"
          :profileData="profile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teamId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      teamData: {},
    };
  },
  async fetch() {
    const response = await this.$axios.get(
      `${process.env.CMS_URL}/api/profile-groups?populate[profiles][populate]=*&filters[Name][$eq]=${this.teamId}`
    );
    this.teamData = response.data.data[0];
  },
};
</script>

<style>
</style>