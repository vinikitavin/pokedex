<template>
  <div class="circle-components">
    <UiColoredCircle
      circle-description="
#A1A1A1
Stile
dark
rock"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#70A83B
grass
bug"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#A2CFF0
ice
water"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#F76545
fire
fighting
dragon"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#76AADB
normal
gosth"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#A974BC
posion
psychic
fairy
ghost"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#9B897B
ground"
      class="circle-components__circle-component"
    />
    <UiColoredCircle
      circle-description="
#F7C545
electric"
      class="circle-components__circle-component"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UiColoredCircle from '@/components/UI/UiColoredCircle.vue';

@Component({
  components: {
    UiColoredCircle
  }
})

export default class UiColoredSquares extends Vue {
}
</script>

<style lang="scss">
.circle-components {
  display: flex;
  flex-wrap: wrap;

  &__circle-component {
    margin: 0 79px 40px 0;
  }

  &__circle-component:nth-child(8) {
    margin: 0 0 40px 0;
  }

  &__circle-component:nth-child(1) > .ui-circle__body {
    background: $stile-dark-rock;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(2) > .ui-circle__body {
    background: $grass-bug;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(3) > .ui-circle__body {
    background: $ice-water;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(4) > .ui-circle__body {
    background: $fire-fighting-dragon;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(5) > .ui-circle__body {
    background: $normal-gosth;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(6) > .ui-circle__body {
    background: $posion-psychic-fairy-ghost;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(7) > .ui-circle__body {
    background: $ground;
    margin-bottom: 59px;
  }

  &__circle-component:nth-child(8) > .ui-circle__body {
    background: $electric;
    margin-bottom: 59px;
  }
}
</style>
