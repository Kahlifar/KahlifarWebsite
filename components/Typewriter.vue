<template>
  <div class="typewriter">
    <h1>
      <span class="typewriter__text">{{ typeValue }}</span>
      <span
        class="typewriter__cursor"
        :class="{ 'typewriter__cursor--typing': typeStatus }"
        >&nbsp;</span
      >
    </h1>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    speed: {
      type: Number,
      default: 100,
    },
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex == this.typeValue.length) {
        this.typeStatus = true;
        this.typeValue += this.text.charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.speed);
      } else {
        this.typeStatus = false;
      }
      //   if (!this.typeStatus) this.typeStatus = true
      //   this.typeValue += this.text.charAt(this.charIndex);
      //   this.charIndex += 1;
      //   setTimeout(this.typeText, this.speed);
    },
  },
  created() {
    // setTimeout(this.typeText);
    this.typeText();
    console.log(this.typeStatus);
  },
};
</script>

<style lang="scss" scoped>
</style>