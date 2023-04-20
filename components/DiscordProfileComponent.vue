<template>
  <div class="profile-component">
    <div v-if="$fetchState.pending">
      <h2>Loading ...</h2>
    </div>
    <div v-else-if="$fetchState.error">
      <h2>An Error occured.</h2>
    </div>
    <div
      v-else
      class="profile-component__content"
      :style="`--color: #${memberData.topRole.color.toString(16)}`"
    >
      <img
        class="profile-component__content__image"
        :src="memberData.avatarURL"
        :alt="`Profile ${memberData.user.username}`"
      />
      <span class="profile-component__content__username">
        {{ memberData.nick ? memberData.nick : memberData.user.username }}
      </span>
      <span class="profile-component__content__discordtag">
        {{ memberData.discordtag }}
      </span>
      <div class="profile-component__content__tags">
        <span
          v-for="(tag, index) in memberData.tags"
          :key="index"
          class="profile-component__content__tags__tag"
          ><span class="material-icons">tag</span>{{ tag }}</span
        >
      </div>
      <!-- <div class="profile-component__content__socials">
        <span class="profile-component__content__socials--twitter" v-if="socials.twitter">{{socials.twitter}}</span>

      </div> -->
    </div>
  </div>
</template>


<script>
import { getTopRole, getAvatarURL } from "~/helpers/discord/user";
export default {
  props: {
    profileData: {
      type: Object,
      required: false
    },
  },
  data() {
    return {
      memberData: {},
    };
  },
  async fetch() {
    if (this.profileData.attributes.DiscordId) {
      const response = await this.$axios.get(
        `https://kahlifar.de/api/discord/members?userId=${this.profileData.attributes.DiscordId}`
      );
      this.memberData = response.data;
      this.memberData.discordtag = `${memberData.user.username}#${memberData.user.discriminator}`;
    }
    memberData.tags = profileData.attributes.Tags;
    memberData.socials = profileData.attributes.Socials;

    if (profileData.attributes.Username) memberData.user.username = profileData.attributes.Username;
    if (profileData.attributes.DiscordTag) memberData.discordtag = profileData.attributes.DiscordTag;
    



  },
  fetchOnServer: true,
};
</script>

<style>
</style>
