<template>
  <nav :class="isOpen ? 'nav-bar--open' : '' " class="nav-bar">
    <div class="nav-bar__content">
      <nuxt-link to="/" class="nav-bar__logo">
        <img src="~/assets/images/logo_full-name.png" alt="logo" />
      </nuxt-link>
      <div
        class="nav-bar__content__links"
      >
        <nuxt-link @click.prevent="isOpen = !isOpen" to="/" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Home</span>
        </nuxt-link>
        <nuxt-link to="/server" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Server</span>
        </nuxt-link>
        <a href="/team" to="/team" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Team</span>
        </a>
        <nuxt-link href="/socials" to="/socials" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Socials</span>
        </nuxt-link>
        <nuxt-link href="/articles" to="/articles" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Artikel</span>
        </nuxt-link>
      </div>

      <LinkButton
        class="light-blue nav-bar__content__discord-button"
        title="Discord"
        href="/discord"
        target="_blank"
      />
      <button @click.prevent="isOpen = !isOpen" class="nav-bar__burger">
        <span v-if="!isOpen" class="material-icons">menu</span>
        <span v-if="isOpen" class="material-icons">close</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
};
</script>