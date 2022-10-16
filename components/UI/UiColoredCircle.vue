<template>
  <div class="ui-circle">
    <div class="ui-circle__body" />
    <p class="ui-circle__description">
      {{ circleDescription }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiColoredCircle extends Vue {
  @Prop({
    type: String,
    required: true
  })
  circleDescription: string | undefined
}
</script>

<style lang="scss">
.ui-circle {
  &__body {
    width: 28px;
    height: 28px;
    border-radius: 200px;
  }

  &__description {
    display: table-caption;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 38px;
    line-height: 45px;
    color: $black;
  }
}
</style>
