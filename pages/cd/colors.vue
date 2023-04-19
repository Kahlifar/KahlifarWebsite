<template>
  <div class="default-content">
    <a class="link-icon" href="/cd/general"><span class="material-icons"> west </span> Back to CD</a>
    <h1>Colors</h1>
    <p>
      We have set our primary colors and secondary colors. They are used in the
      design of the logos, website and more.<br />
      <br />
      The primary colors are used for the main elements of the website. The
      secondary colors are used for the secondary elements.<br />
      Preferably use the primary colors before the secondary colors.
    </p>
    <!-- {{ colors }} -->
    <h2>Primary Colors</h2>
    <ul class="colorlist">
      <li v-for="color in primaryColors" :key="color.id">
        <div
          class="colorlist__color"
          :style="{ backgroundColor: color.attributes.Color }"
        >
          <span
            class="colorlist__color__name"
            :style="{
              color: isWhiteCompatible(color.attributes.Color)
                ? 'white'
                : 'black',
            }"
            >{{ color.attributes.Name }}</span
          >
          <span
            class="colorlist__color__code"
            :style="{
              color: isGreyCompatible(color.attributes.Color) ? '' : 'black',
            }"
            >{{ color.attributes.Color }}</span
          >
        </div>
      </li>
    </ul>

    <h2>Shades - Primary Colors</h2>
    <ul class="shadelist">
      <li v-for="color in primaryColors" :key="color.id">
        <h3>
          {{ color.attributes.Name
          }}{{
            color.attributes.ColorName ? " - " + color.attributes.ColorName : ""
          }}
        </h3>
        <ul class="shadelist__shade-list">
          <li
            class="shadelist__shade"
            v-for="(shade, index) in getFormattedShadeList(color)"
            :key="index"
          >
            <div
              class="shadelist__shade__color"
              :style="{ backgroundColor: shade.color }"
            >
              <span
                class="shadelist__shade__percent"
                :style="{
                  color: isWhiteCompatible(shade.color) ? 'white' : 'black',
                }"
                >{{ shade.percent }}%</span
              >
              <span
                class="shadelist__shade__colorcode"
                :style="{
                  color: isGreyCompatible(shade.color) ? 'gray' : 'black',
                }"
                >{{ shade.color }}</span
              >
            </div>
          </li>
        </ul>
      </li>
    </ul>

    <h2>Secondary Colors</h2>
    <ul class="colorlist" v-if="secondaryColors != []">
      <li v-for="color in secondaryColors" :key="color.id">
        <div
          class="colorlist__color"
          :style="{ backgroundColor: color.attributes.Color }"
        >
          <span
            class="colorlist__color__name"
            :style="{
              color: isWhiteCompatible(color.attributes.Color)
                ? 'white'
                : 'black',
            }"
            >{{ color.attributes.Name }}</span
          >
          <span
            class="colorlist__color__code"
            :style="{
              color: isGreyCompatible(color.attributes.Color) ? '' : 'black',
            }"
            >{{ color.attributes.Color }}</span
          >
        </div>
      </li>
    </ul>
    <h2>Shades - Secondary Colors</h2>
    <ul class="shadelist">
      <li v-for="color in secondaryColors" :key="color.id">
        <h3>
          {{ color.attributes.Name
          }}{{
            color.attributes.ColorName ? " - " + color.attributes.ColorName : ""
          }}
        </h3>
        <ul class="shadelist__shade-list">
          <li
            class="shadelist__shade"
            v-for="(shade, index) in getFormattedShadeList(color)"
            :key="index"
          >
            <div
              class="shadelist__shade__color"
              :style="{ backgroundColor: shade.color }"
            >
              <span
                class="shadelist__shade__percent"
                :style="{
                  color: isWhiteCompatible(shade.color) ? 'white' : 'black',
                }"
                >{{ shade.percent }}%</span
              >
              <span
                class="shadelist__shade__colorcode"
                :style="{
                  color: isGreyCompatible(shade.color) ? 'gray' : 'black',
                }"
                >{{ shade.color }}</span
              >
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { getColorLightness } from "~/helpers/colors/colors";
export default {
  name: "Colors",
  head() {
    return {
      title: "Colors - CD Kahlifar",
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
  data() {
    return {
      colors: [],
      primaryColors: [],
      secondaryColors: [],
    };
  },
  methods: {
    async getColors() {
      this.colors = (
        await this.$axios.get(`${process.env.CMS_URL}/api/colors?populate=*`)
      ).data.data;
    },
    async sortColorsByPrimary() {
      this.colors.forEach((color) => {
        if (color.attributes.isPrimary) {
          this.primaryColors.push(color);
        } else {
          this.secondaryColors.push(color);
        }
      });
    },
    getFormattedShadeList(colors) {
      let shades = [
        {
          percent: 120,
          color: colors.attributes.DarkColor,
        },
        {
          percent: 100,
          color: colors.attributes.Color,
        },
      ];

      colors.attributes.Shades.forEach((shade) => {
        shades.push({
          percent: shade.Percent,
          color: shade.Color,
        });
      });

      // Sort the shades by percent
      shades.sort((a, b) => {
        return a.percent + b.percent;
      });

      return shades;
    },
    getColorLightness(color) {
      return getColorLightness(color);
    },
    isWhiteCompatible(color) {
      return getColorLightness(color) <= 0.6;
    },
    isGreyCompatible(color) {
      return getColorLightness(color) <= 0.2;
    },
  },
  async mounted() {
    await this.getColors();
    await this.sortColorsByPrimary();
  },
};
</script>

<style lang="scss">
.colorlist {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 1.5rem;
  // background-color: white;
  list-style: none;
  justify-content: center;

  & > li {
    list-style: none;
  }

  &__color {
    height: 7.5rem;
    width: 14rem;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    border: 1px #aaa solid;
    &__name {
      color: white;
      font-size: 22px;
    }

    &__code {
      color: gray;
      font-size: 14px;
    }
  }
}
.shadelist {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 1.5rem;
  list-style: none;
  justify-content: center;
  width: 100%;

  & > li {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__shade-list {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0;
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      height: 5px !important;
    }
  }

  &__shade {
    height: 7.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px #aaa solid;
    &__color {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0.2rem;
    }

    &__percent {
      color: white;
      font-size: 16px;
    }
  }

  @media screen and (max-width: $sm-max) {
    // Percent and colorcode
    &__shade__percent {
      font-size: 12px;
    }
    &__shade__colorcode {
      font-size: 12px;
    }
  }
}
</style>