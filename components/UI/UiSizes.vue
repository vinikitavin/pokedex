<template>
  <div class="ui-sizes">
    <p class="ui-sizes__title">
      Sizes:
    </p>
    <h1>h1= 72px</h1>
    <h2>h2= 64px</h2>
    <h3>h3= 36px</h3>
    <h4>h4= 24px</h4>
    <h5>h5 = 18px</h5>
    <h6>h6 = 12px</h6>
    <p class="ui-sizes__p">
      Paragraph = 16 px
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'UiSizes'
})

export default class UiSizes extends Vue {
}
</script>

<style lang="scss">
.ui-sizes {
  margin: 50px 0;

  &__title {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 40px;
    line-height: 47px;
  }

  &__p {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
