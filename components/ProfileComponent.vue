<template>
  <div class="profile-component" :style="`--color: ${roleColor}`">
    <div class="profile-component__content">
        <img  class="profile-component__content__image" :src="require(`~/assets/images/team/profiles/${avatar}`)" :alt="`Profile ${username}`"/>
      <div class="profile-component__content__username">
        {{ username }}
      </div>
      <div class="profile-component__content__discordtag">
        {{ discordTag }}
      </div>
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
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    discordTag: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    roleColor: {
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
};
</script>

<style>
</style>
