<template>
  <nav class="nav-bar">
    <div class="nav-bar__content">
      <nuxt-link to="/" class="nav-bar__logo">
        <img src="~/assets/images/svg/logo.svg" alt="logo" />
        <span class="nav-bar__logo__title">ahlifar</span>
      </nuxt-link>
      <div class="nav-bar__content__links">
        <nuxt-link to="/" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Home</span>
        </nuxt-link>
        <nuxt-link to="/server" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Server</span>
        </nuxt-link>
        <nuxt-link to="/team" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Team</span>
        </nuxt-link>
        <nuxt-link to="/socials" class="nav-bar__content__links__link">
          <span class="nav-bar__content__links__link__text">Socials</span>
        </nuxt-link>
        <LinkButton
          class="light-blue nav-bar__link"
          title="Discord"
          href="http://dc.kahlifar.de"
          target="_blank"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>