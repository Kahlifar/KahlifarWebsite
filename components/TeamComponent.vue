<template>
  <div class="team-component">
    <span v-if="$fetchState.pending">Loading Tean...</span>
    <span v-else-if="$fetchState.error">An Error occured.</span>
    <div v-else-if="teamData && teamData.attributes.profiles.data">
      <h2>{{ teamData.attributes.Title }}</h2>
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
    <span class="team-component__no-profiles" v-else-if="teamData.attributes.profiles.data == []">Keine Mitglieder gefunden in dieser Gruppe.</span>
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
    console.log(teamData.attributes.profiles.data);
  },
};
</script>

<style>
</style>