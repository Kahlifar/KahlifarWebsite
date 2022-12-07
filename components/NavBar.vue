<template>
  <nav :class="isOpen ? 'nav-bar--open' : '' " class="nav-bar">
    <div class="nav-bar__content">
      <nuxt-link to="/" class="nav-bar__logo">
        <img src="~/assets/images/svg/logo.svg" alt="logo" />
        <span class="nav-bar__logo__title">ahlifar</span>
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
        <a href="/team" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Team</span>
        </a>
        <a href="/socials" to="/socials" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Socials</span>
        </a>
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