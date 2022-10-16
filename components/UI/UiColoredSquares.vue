<template>
  <div class="colored-squares">
    <UiColoredSquare
      class="colored-squares__square-one"
      square-description="
#F5DB13
RGB 245, 219, 19
HSV 53, 92, 96
CMYK 0, 11, 92, 4
LAB 87, -8, 85"
      square-name="Third"
    />
    <UiColoredSquare
      class="colored-squares__square-two"
      square-description="
#F2B807
RGB 242, 184, 7
HSV 45, 97, 95
CMYK 0, 24, 97, 5
LAB 78, 9, 80"
      square-name="Primary"
    />
    <UiColoredSquare
      class="colored-squares__square-three"
      square-description="
#F28F16
RGB 242, 143, 22
HSV 33, 91, 95
CMYK 0, 41, 91, 5
LAB 68, 30, 71"
      square-name="Second"
    />
    <UiColoredSquare
      class="colored-squares__square-four"
      square-description="
#D93E30
RGB 217, 62, 48
HSV 5, 78, 85
CMYK 0, 71, 78, 15
LAB 50, 59, 44"
      square-name="Danger"
    />
    <UiColoredSquare
      class="colored-squares__square-five"
      square-description="
#F6F7F9
RGB 246, 247, 249
HSV 220, 1, 98
CMYK 1, 1, 0, 2
LAB 97, 0, -1"
      square-name="White"
    />
    <UiColoredSquare
      class="colored-squares__square-six"
      square-description="
#212121
RGB 181 122 0 71
HSV 40 100 71
CMYK 0 33 100 29
LAB 56 15 62"
      square-name="Dark"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UiColoredSquare from '@/components/UI/UiColoredSquare.vue';

@Component({
  components: {
    UiColoredSquare
  }
})

export default class UiColoredSquares extends Vue {
}
</script>

<style lang="scss">
.colored-squares {
  display: flex;

  &__square-one {
    background: $third;
    margin-right: 16px;
  }

  &__square-two {
    background: $primary;
    margin-right: 16px;
  }

  &__square-three {
    background: $second;
    margin-right: 16px;
  }

  &__square-four {
    background: $danger;
    margin-right: 16px;
  }

  &__square-five {
    background: $white;
    margin-right: 16px;
  }

  &__square-six {
    background: $dark;
  }

  &__square-six > .ui-square__name {
    color: $light-grey;
  }

  &__square-six > .ui-square__description {
    color: $light-grey;
  }
}
</style>
