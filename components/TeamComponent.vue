<template>
  <div class="team-component">
    <div class="team-component__group">
      <ProfileComponent
        username="Fynnyx"
        discordTag="Fynnyx#4024"
        role="Discord Owner"
        roleColor="#277490"
        avatar="Fynnyx.gif"
        :tags="['Bot', 'Cool', 'Bester Owner']"
        :socials="{
          twitter: 'https://twitter.com/Fynnyx',
        }"
      />
      <ProfileComponent
        username="Wolpina"
        discordTag="Wolpina#3008"
        role="Discord Owner"
        roleColor="#277490"
        avatar="Wolpina.png"
        :tags="['Bot', 'Cool', 'Bester Owner']"
        :socials="{
          twitter: 'https://twitter.com/Wolpina_',
        }"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>