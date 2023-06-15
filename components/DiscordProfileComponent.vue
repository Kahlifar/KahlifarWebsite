<template>
  <div class="profile-component">
    <div v-if="$fetchState.pending">
      <h2 class="status-text">Loading ...</h2>
    </div>
    <div v-else-if="$fetchState.error">
      <h2 class="status-text">An Error occured.</h2>
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
        {{ memberData.nick ? memberData.nick : memberData.user.display_name }}
      </span>
      <span class="profile-component__content__discordtag">
        {{ memberData.user.discriminator == "0" ? "@"+memberData.user.username : memberData.user.username + "#" + memberData.user.discriminator}}
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
        <span class="profile-component__content__socials--twitter" v-if="memberData.socials.Twitter"> 
          <a :href="`https://twitter.com/${memberData.socials.Twitter}`" target="_blank">
            <font-awesome-icon icon="fa-brands fa-twitter"/>
          </a>
        </span>
        <span class="profile-component__content__socials--youtube" v-if="memberData.socials.YouTube"> 
          <a :href="`https://youtube.com/channel/${memberData.socials.YouTube}`" target="_blank">
            <font-awesome-icon icon="fa-brands fa-youtube"/>
          </a>
        </span>
        <span class="profile-component__content__socials--twitch" v-if="memberData.socials.Twitch"> 
          <a :href="`https://twitch.tv/${memberData.socials.Twitch}`" target="_blank">
            <font-awesome-icon icon="fa-brands fa-twitch"/>
          </a>
        </span>
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
      required: false,
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
        `http://localhost:3000/api/discord/members?userId=${this.profileData.attributes.DiscordId.value}`
      );
      this.memberData = response.data;
      this.memberData.discordtag = `${this.memberData.user.username}#${this.memberData.user.discriminator}`;
    }
    this.memberData.tags = this.profileData.attributes.Tags;
    this.memberData.socials = this.profileData.attributes.Socials;

    if (this.profileData.attributes.Username)
      this.memberData.user.display_name = this.profileData.attributes.Username;
    if (this.profileData.attributes.DiscordTag)
      this.memberData.username = this.profileData.attributes.DiscordTag;
    if (this.profileData.attributes.ProfilePicture.data) {
      this.memberData.avatarURL =
        process.env.CMS_URL +
        this.profileData.attributes.ProfilePicture.data.attributes.url;
    } else {
      this.memberData.avatarURL = await getAvatarURL(this.memberData);
    }
    if (this.profileData.attributes.Color) {
      this.memberData.topRole = {
        color: this.profileData.attributes.Color,
      };
    } else {
      this.memberData.topRole = {
        color: (await getTopRole(this.memberData)).color.toString(16),
      };
    }
  },
  fetchOnServer: true,
};
</script>

<style>
</style>
