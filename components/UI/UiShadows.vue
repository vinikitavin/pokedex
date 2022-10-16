<template>
  <div class="ui-shadows">
    <p class="ui-shadows__title">
      Shadows
    </p>
    <div class="ui-shadows__squares">
      <div class="ui-shadows__shadow-one" />
      <div class="ui-shadows__shadow-two" />
      <div class="ui-shadows__shadow-three" />
      <div class="ui-shadows__shadow-four" />
      <div class="ui-shadows__shadow-five" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'UiShadows'
})

export default class UiShadows extends Vue {
}
</script>

<style lang="scss">
.ui-shadows {
  margin: 50px 0;

  &__title {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 30px;
  }

  &__squares {
    display: flex;
  }

  &__shadow-one,
  &__shadow-two,
  &__shadow-three,
  &__shadow-four,
  &__shadow-five {
    width: 120px;
    height: 120px;
    background: $grey;
    margin-right: 48px;
  }

  &__shadow-three,
  &__shadow-five {
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
  }
}
</style>
