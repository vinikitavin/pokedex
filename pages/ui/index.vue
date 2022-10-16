<template>
  <div class="ui">
    <div class="ui__container">
      <div class="ui__logo-position">
        <LogoSvg />
      </div>
      <div class="ui__colored-squares">
        <UiColoredSquares />
      </div>
      <div class="ui__colored-rectangles">
        <UiColoredRectangles />
      </div>
      <div class="ui__colored-circles">
        <UiColoredCircles />
      </div>
      <div class="ui__fonts">
        <UiFonts />
      </div>
      <div class="ui__sizes">
        <UiSizes />
      </div>
      <div class="ui__margins">
        <UiMargins />
      </div>
      <div class="ui__shadows">
        <UiShadows />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogoSvg from '@/components/LogoSvg.vue';
import UiColoredSquares from '@/components/UI/UiColoredSquares.vue';
import UiColoredRectangles from '@/components/UI/UiColoredRectangles.vue';
import UiColoredCircles from '@/components/UI/UiColoredCircles.vue';
import UiFonts from '@/components/UI/UiFonts.vue';
import UiSizes from '@/components/UI/UiSizes.vue';
import UiMargins from '@/components/UI/UiMargins.vue';
import UiShadows from '@/components/UI/UiShadows.vue';

@Component({
  name: 'UiPage',
  components: {
    LogoSvg,
    UiColoredSquares,
    UiColoredRectangles,
    UiColoredCircles,
    UiFonts,
    UiSizes,
    UiMargins,
    UiShadows
  }
})
export default class UiPage extends Vue {}
</script>

<style lang="scss" scoped>
.ui {
  display: flex;
  background: white;
  justify-content: center;

  &__logo-position {
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }

  &__colored-squares {
    display: flex;
    margin: 80px 0;
    justify-content: center;
  }

  &__colored-rectangles {
    display: flex;
    border-top: 1px solid $black;
    border-bottom: 1px solid $black;
    margin: 80px 0;
    justify-content: center;
  }

  &__colored-circles {
    display: flex;
    justify-content: center;
    padding: 0 280px;
    border-bottom: 1px solid $black;
  }

  &__fonts {
    border-bottom: 1px solid $black;
  }

  &__sizes {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid $black;
  }

  &__margins {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid $black;
  }

  &__shadows {
    display: flex;
    justify-content: center;
  }
}
</style>
