<template>
  <div class="ui-font">
    <p class="ui-font__name">
      {{ fontName }}
    </p>
    <h3 class="ui-font__example">
      ABCDEFGHIJKLMNOPQRSTUVW
      XYZabcdefghijklmnopqrstuvw
      xyz1234567890‘?’!(%)[#]{@}/&
      \<-+=>$£:;,.*
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiFont extends Vue {
  @Prop({
    type: String,
    required: true
  })
  fontName: string | undefined
}
</script>

<style lang="scss">
.ui-font {
  &__name {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 32px;
  }

  &__example {
    width: 500px;
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
  }
}
</style>
