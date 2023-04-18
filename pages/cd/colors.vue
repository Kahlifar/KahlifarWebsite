<template>
  <div class="default-content">
    <h1>Colors</h1>
    <p>
        We have set out primary colors and secondary colors.
        They are used in the design of the logos, website and more.
    </p>
    <!-- {{ colors }} -->

    <ul class="colorlist colorlist--small">
        <li v-for="color in primaryColors" :key="color.id">
            <div class="colorlist__color" :style="{ backgroundColor: color.attributes.Color }">
                <span class="colorlist__color__name" :style="{ color: (getColorLightness(color.attributes.Color) >= 0.7 ? 'black' : 'white')}">{{ color.attributes.Name }}</span>
                <span class="colorlist__color__code" :style="{ color: (getColorLightness(color.attributes.Color) == 0.7 ? 'gray' : 'black')}">{{ color.attributes.Color }}</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { getColorLightness } from '~/helpers/colors/colors'
export default {
    name: 'Colors',
    // Set the page title
    head() {
        return {
            title: 'Colors - CD Kahlifar'
        }
    },
    data() {
        return {
            colors: [],
            primaryColors: [],
            secondaryColors: []
        }
    },
    methods: {
        async getColors() {
            this.colors = (await this.$axios.get(`https://cms.kahlifar.de/api/colors?populate=*`)).data.data
        },
        async sortColors() {
            this.colors.forEach(color => {
                if (color.attributes.isPrimary) {
                    this.primaryColors.push(color)
                } else {
                    this.secondaryColors.push(color)
                }
            })
        },
        getColorLightness(color) {
            return getColorLightness(color)
        }
    },
    async mounted() {
        await this.getColors()
        await this.sortColors()
    }

}
</script>

<style lang="scss">
@function set-color($color) {
    @if (lightness($color) > 40) {
      @return #000;
    }
    @else {
      @return #FFF;
    }
}

.colorlist {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 1.5rem;
    background-color: white;
    list-style: none;

    &>li {
        list-style: none;
    }

    &__color {
        height: 7.5rem;
        width: 12rem;
        padding: 0.2rem;
        display: flex;
        flex-direction: column;

        &__name {
            color: white;
            font-size: 22px;
        }

        &__code {
            color: gray;
            font-size: 14px;
        }
    }

    &--small {
        
    }
}
</style>