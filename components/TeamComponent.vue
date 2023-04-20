<template>
  <div class="team-component">
    <span v-if="$fetchState.pending">Loading Tean...</span>
    <span v-else-if="$fetchState.error">An Error occured.</span>
    <div v-else-if="teamData">
      <h2>{{ teamData.attributes.Title }}</h2>
      <p>{{ teamData.attributes.Description }}</p>
      <div class="team-component__profiles">
          <DiscordProfileComponent
            v-for="(profile, index) in teamData.attributes.profiles.data"
            :key="index"
            class="team-component__profiles__profile"
            :style="{backgroundColor: `${teamData.attributes.Color}`}"
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