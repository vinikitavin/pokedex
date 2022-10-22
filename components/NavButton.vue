<template>
  <button class="button button_font button_size">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { ResizeMixin } from '~/mixins/resize';

@Component
export default class NavButton extends Mixins(ResizeMixin) {
  @Prop({ required: true }) private readonly buttonText!: string
}

</script>

<style lang="scss" scoped>
.button {
  display: flex;
  line-height: 52px;
  border-radius: 11px;
  background-color: $green-btn;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  align-items: start;
  justify-content: center;

  &_font {
    font-family: 'Karla-Bold', sans-serif;
    font-size: 23px;
    color: $dark;
  }

  &_size {
    width: 231px;
    height: 66px;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    &_size {
      width: 313px;
      height: 55px;
    }
  }
}
</style>
