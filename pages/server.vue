<template>
  <div class="default-content">
    <h1>Unsere Server</h1>
    <p>
      Die Community hat verschiedene Server. Manche Server/Projekte bleiben für
      etwas länger als andere. <br />
      Von Vanilla Minecraft über Modded Minecraft bishin zu ARK Servern hatten
      wir schon alles. Erhalte hier alle nötigen Informationen um mitzuspielen.
    </p>

    <span v-if="$fetchState.pending">Loading Servers...</span>
    <span v-else-if="$fetchState.error"
      >Error: {{ $fetchState.error.message }}</span
    >
    <div v-else class="servers">
      <ServerProfile
        v-for="server in servers"
        :key="server.id"
        :serverData="server.attributes"
      >
      </ServerProfile>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      servers: [],
    };
  },
  async fetch() {
    this.servers = // Read the env from the context
    (
      await this.$axios.get(`${process.env.CMS_URL}/api/services?populate=*`)
    ).data.data;
  },
};
</script>

<style>
</style>