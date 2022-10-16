<template>
  <button class="button nav-button-font nav-button-size">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavButton extends Vue {
  @Prop({
    type: String,
    required: true
  })
  buttonText: string | undefined
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
}

.nav-button-font {
  font-family: 'Karla-Bold', sans-serif;
  font-size: 23px;
  color: $dark;
}

.nav-button-size {
  width: 231px;
  height: 66px;
}
</style>
