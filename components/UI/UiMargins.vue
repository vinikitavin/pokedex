<template>
  <div class="ui-margins">
    <p class="ui-margins__title">
      Margins
    </p>
    <div class="ui-margins__squares">
      <div class="ui-margins__square-one square-one-description">
        120px
      </div>
      <div class="ui-margins__square-two square-two-description">
        96px
      </div>
      <div class="ui-margins__square-three square-three-description">
        80px
      </div>
      <div class="ui-margins__square-four square-four-description">
        64px
      </div>
      <div class="ui-margins__square-five square-five-description">
        32
        px
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'UiMargins'
})

export default class UiMargins extends Vue {
}
</script>

<style lang="scss">
.ui-margins {
  margin: 50px 0;

  &__title {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 30px;
  }

  &__squares {
    display: flex;
    align-items: end;
  }

  &__square-one {
    width: 120px;
    height: 120px;
    background: $grey;
    margin-right: 30px;
  }

  .square-one-description,
  .square-two-description,
  .square-three-description,
  .square-four-description {
    display: flex;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 18px;
    justify-content: center;
    align-items: center;
  }

  &__square-two {
    width: 96px;
    height: 96px;
    background: $grey;
    margin-right: 30px;
  }

  &__square-three {
    width: 80px;
    height: 80px;
    background: $grey;
    margin-right: 30px;
  }

  &__square-four {
    width: 64px;
    height: 64px;
    background: $grey;
    margin-right: 30px;
  }

  &__square-five {
    width: 32px;
    height: 32px;
    background: $grey;
  }

  .square-five-description {
    display: flex;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 9px;
    justify-content: center;
    align-items: center;
  }
}
</style>
