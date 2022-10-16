<template>
  <div class="ui-square">
    <div class="ui-square__name">
      {{ squareName }}
    </div>
    <div class="ui-square__description">
      {{ squareDescription }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiColoredSquare extends Vue {
  @Prop({
    type: String,
    required: true
  })
  squareName: string | undefined

  @Prop({
    type: String,
    required: true
  })
  squareDescription: string | undefined
}
</script>

<style lang="scss">
.ui-square {
  width: 200px;
  height: 200px;

  &__name, &__description {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: $black;
  }

  &__name {
    display: flex;
    justify-content: end;
    padding: 19px 13px 0 0;
  }

  &__description {
    display: flex;
    width: 115px;
    padding: 90px 0 11px 21px;
  }
}
</style>
