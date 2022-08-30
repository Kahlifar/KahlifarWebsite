<template>
  <div class="team-component">
    <h2>Owner</h2>
    <div class="team-component__group">
      <ProfileComponent
        username="Fynnyx"
        discordTag="Fynnyx#4024"
        role="Discord Owner"
        roleColor="#277490"
        avatar="Fynnyx.gif"
        :tags="['Developer', 'VALORANT', 'KLI']"
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
        :tags="['Builderin', 'Minecraft', 'KLI']"
        :socials="{
          twitter: 'https://twitter.com/Wolpina_',
        }"
      />
      <ProfileComponent
        username="Idefix"
        discordTag="Idefix#3016"
        role="Discord Owner"
        roleColor="#277490"
        avatar="Idefix.jpg"
        :tags="['Student', 'PirateGalaxy', 'Judo']"
        :socials="{}"
      />
    </div>
    <h2>Senior Moderatoren</h2>
    <div class="team-component__group">
      <p class="italic">Coming Soon</p>
    </div>
    <h2>Moderatoren</h2>
    <div class="team-component__group">
      <p class="italic">Coming Soon</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>