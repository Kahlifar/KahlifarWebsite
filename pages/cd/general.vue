<template>
  <div class="default-content">
    <h1>Corporate Design - Kahlifar</h1>
    <p class="cd-description">
      Corporate Design (CD) is the visual identity of an organisation. It set
      the rules and parameter for any media published by this organisation.<br />
      We have set this CD to show the same visual identity for all our media.<br />
    </p>
    <h2>Use of colors</h2>
    <p>
      All colors can be found in the
      <a href="/cd/colors">color palette</a>.<br />
      The primary colors are used for the main elements of the website and
      general media. Mostly the <b>Kahlifar Blue</b> background with the accent
      colors <b>Kahlifar Light Blue</b>, <b>Kahlifar Sky Blue</b>,
      <b>Kahlifar Orange</b> and <b>Kahlifar Yellow</b>.<br />
      By using the accent colors, the primary colors are still visible and the
      website looks consistent.<br />
      <br />
      The secondary colors are used for the secondary elements of the media. The
      usage should be limited and not to overwelm the primary colors.<br />
    </p>
    <h2>Fonts</h2>
    <p>
      The Font used by us is <b>Open Sans <i>sans-serif</i></b
      >. This modern font is used everywhere and does not change.<br />
      <code>font-family: 'Open Sans', sans-serif;</code>
    </p>
    <h2>Assets/Logo</h2>
    <p>
      All assets can be found on the <a href="/cd/downloads">CD Downloads</a> page.<br />
      The logo is available in different formats and sizes.<br />
      <br />
      Other assets like the favicon and the social media icons are also available. 
    </p>
    <h2>General Elements</h2>
    <p>
      The often used, rotated rectangles are set at a 26° degree angle to the right.<br />
      They don't have content and are more a design element in the CD colors and used for the background.
    </p>
  </div>
</template>

<script>
export default {
  name: "General",
  head() {
    return {
      title: "General - CD Kahlifar",
      // Change the meta description
      meta: [
        {
          property: "og:title",
          content: `Kahlifar CD - General`,
        },
        {
          property: "og:description",
          content: `General information about the Kahlifar CD`,
        }
      ],
    };
  },
};
</script>

<style lang="scss">
.default-content {
  align-items: flex-start;
}

h1 {
  align-self: center;
}

.cd {
  &-description {
    font-size: 1.2rem;
    line-height: 1.5rem;
    align-self: center;
  }
}
</style>