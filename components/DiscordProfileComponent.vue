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
        {{ memberData.nick }}
      </span>
      <span class="profile-component__content__discordtag">
        {{ memberData.user.username }}#{{ memberData.user.discriminator }}
      </span>
      <div class="profile-component__content__tags">
        <span
          v-for="(tag, index) in tags"
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
    userid: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    socials: {
      type: Object,
    },
  },
  data() {
    return {
      memberData: {},
    };
  },
  async fetch() {
    const response = await this.$axios.get(
      `http://localhost:3000/api/discord/members?userId=${this.userid}`
    );
    this.memberData = response.data;
    this.memberData.topRole = await getTopRole(this.memberData);
    this.memberData.avatarURL = await getAvatarURL(this.memberData);
  },
  fetchOnServer: true,
};
</script>

<style>
</style>
