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
      :style="`--color: #${memberData.topRole.color}`"
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
          v-for="(tag) in memberData.tags"
          :key="tag.id"
          class="profile-component__content__tags__tag"
          ><span class="material-icons">tag</span>{{ tag.value }}</span
        >
      </div>
      <div class="profile-component__content__socials">
        <span class="profile-component__content__socials--twitter" v-if="memberData.socials.Twitter"> <span class="material-icons"></span> {{memberData.socials.Twitter}}</span>

      </div>
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
    console.log(this.profileData);
    if (this.profileData.attributes.DiscordId) {
      const response = await this.$axios.get(
        `http://localhost:3000/api/discord/members?userId=${this.profileData.attributes.DiscordId.value}`
      );
      console.log(response.data);
      this.memberData = response.data;
      this.memberData.discordtag = `${this.memberData.user.username}#${this.memberData.user.discriminator}`;
    }
    this.memberData.tags = this.profileData.attributes.Tags;
    this.memberData.socials = this.profileData.attributes.Socials;

    if (this.profileData.attributes.Username) this.memberData.user.username = this.profileData.attributes.Username;
    if (this.profileData.attributes.DiscordTag) this.memberData.discordtag = this.profileData.attributes.DiscordTag;
    if (this.profileData.attributes.ProfilePicture.data) {
      this.memberData.avatarURL = process.env.CMS_URL + this.profileData.attributes.ProfilePicture.data.attributes.url;
    } else {
      this.memberData.avatarURL = await getAvatarURL(this.memberData);
      console.log(this.memberData.avatarURL);
    }
    if (this.profileData.attributes.Color) {
      this.memberData.topRole = {
        color: this.profileData.attributes.Color
      }
    } else {
      this.memberData.topRole = {
        color: (await getTopRole(this.memberData)).color.toString(16)
      };
    }

    



  },
  fetchOnServer: true,
};
</script>

<style>
</style>
