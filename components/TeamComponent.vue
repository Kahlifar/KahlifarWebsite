<template>
  <div class="team-component">
    <h2>Owner</h2>
    <div class="team-component__group">
      <DiscordProfileComponent
        userid="451776092785737728"
        :tags="['Developer', 'VALORANT', 'KLI']"
        class="owner"
      />
      <DiscordProfileComponent
        userid="270932032945651714"
        :tags="['AOE', 'PirateGalaxy', 'Minecraft']"
        class="owner"
      />
      <DiscordProfileComponent
        userid="751097780004585483"
        :tags="['Builderin', 'Minecraft', 'OG']"
        class="owner"
      />
    </div>
    <h2>Senior Moderatoren</h2>
    <div class="team-component__group">
      <DiscordProfileComponent
        userid="793477392479420417"
        :tags="['Valorant', 'KLI', 'Content Creator']"
        class="moderator"
      />
      <DiscordProfileComponent
        userid="544882215352401922"
        :tags="['Minecraft', 'Valorant', 'Chill']"
        class="moderator"
      />
    </div>
    <h2>Moderatoren</h2>
    <div class="team-component__group">
      <DiscordProfileComponent
        userid="493038652126003200"
        :tags="['VALORANT', 'KLI', 'OG']"
        class="moderator"
      />
      <DiscordProfileComponent
        userid="740650325051965511"
        :tags="['Minecraft', 'OG']"
        class="senmoderator"
      />
      <DiscordProfileComponent
        userid="795689216956301343"
        :tags="['Minecraft', 'Sims4', 'hilfsbereit']"
        class="moderator"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>