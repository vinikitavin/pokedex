<template>
  <button class="button button_font button_size">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { vueWindowSizeMixin } from 'vue-window-size';

@Component
export default class NavButton extends Vue {
  @Prop({ required: true }) private readonly buttonText!: string
}

</script>

<style lang="scss" scoped>
.button {
  display: flex;
  line-height: 52px;
  border-radius: 11px;
  background-color: #73D677;
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
}
</style>
