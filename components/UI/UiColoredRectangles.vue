<template>
  <div class="rectangles">
    <div class="rectangles__container">
      <p class="rectangles__title">
        Deuteranopia
      </p>
      <div class="rectangles__set">
        <UiColoredRectangle class="rectangles__rectangle1-color1" />
        <UiColoredRectangle class="rectangles__rectangle1-color2" />
        <UiColoredRectangle class="rectangles__rectangle1-color3" />
        <UiColoredRectangle class="rectangles__rectangle1-color4" />
        <UiColoredRectangle class="rectangles__rectangle1-color5" />
        <UiColoredRectangle class="rectangles__rectangle1-color6" />
      </div>
    </div>
    <div class="rectangles__container">
      <p class="rectangles__title">
        Protanopia
      </p>
      <div class="rectangles__set">
        <UiColoredRectangle class="rectangles__rectangle2-color1" />
        <UiColoredRectangle class="rectangles__rectangle2-color2" />
        <UiColoredRectangle class="rectangles__rectangle2-color3" />
        <UiColoredRectangle class="rectangles__rectangle2-color4" />
        <UiColoredRectangle class="rectangles__rectangle2-color5" />
        <UiColoredRectangle class="rectangles__rectangle2-color6" />
      </div>
    </div>
    <div class="rectangles__container">
      <p class="rectangles__title">
        Tritanopia
      </p>
      <div class="rectangles__set">
        <UiColoredRectangle class="rectangles__rectangle3-color1" />
        <UiColoredRectangle class="rectangles__rectangle3-color2" />
        <UiColoredRectangle class="rectangles__rectangle3-color3" />
        <UiColoredRectangle class="rectangles__rectangle3-color4" />
        <UiColoredRectangle class="rectangles__rectangle3-color5" />
        <UiColoredRectangle class="rectangles__rectangle3-color6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UiColoredRectangle from '@/components/UI/UiColoredRectangle.vue';

@Component({
  components: {
    UiColoredRectangle
  }
})

export default class UiColoredSquares extends Vue {
}
</script>

<style lang="scss">
.rectangles {
  padding: 33px 0 50px 0;

  &__title {
    font-family: SourceSansPro-Regular, sans-serif;
    font-size: 26px;
    margin: 17px 0;
  }

  &__set {
    display: flex;
  }

  &__rectangle1-color1 {
    background: #FAD942;
    margin-right: 16px;
  }

  &__rectangle1-color2 {
    background: #DCBF36;
    margin-right: 16px;
  }

  &__rectangle1-color3 {
    background: #BFA62F;
    margin-right: 16px;
  }

  &__rectangle1-color4 {
    background: #88772E;
    margin-right: 16px;
  }

  &__rectangle1-color5 {
    background: #F5F6F8;
    margin-right: 16px;
  }

  &__rectangle1-color6 {
    background: #1E1E1E;
  }

  &__rectangle2-color1 {
    background: #F1CE33;
    margin-right: 16px;
  }

  &__rectangle2-color2 {
    background: #CCAF2B;
    margin-right: 16px;
  }

  &__rectangle2-color3 {
    background: #A68E23;
    margin-right: 16px;
  }

  &__rectangle2-color4 {
    background: #62562C;
    margin-right: 16px;
  }

  &__rectangle2-color5 {
    background: #F5F6F8;
    margin-right: 16px;
  }

  &__rectangle2-color6 {
    background: #1E1E1E;
  }

  &__rectangle3-color1 {
    background: #FFC2B4;
    margin-right: 16px;
  }

  &__rectangle3-color2 {
    background: #FF9A94;
    margin-right: 16px;
  }

  &__rectangle3-color3 {
    background: #FF6C71;
    margin-right: 16px;
  }

  &__rectangle3-color4 {
    background: #F80037;
    margin-right: 16px;
  }

  &__rectangle3-color5 {
    background: #F3F6F7;
    margin-right: 16px;
  }

  &__rectangle3-color6 {
    background: #1E1E1E;
  }
}
</style>
