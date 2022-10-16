<template>
  <div class="ui-fonts">
    <UiFont class="ui-fonts__font-item" font-name="Karla" />
    <UiFont class="ui-fonts__font-item" font-name="Source Sans Pro" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UiFont from '@/components/UI/UiFont.vue';

@Component({
  components: {
    UiFont
  }
})

export default class UiFonts extends Vue {
}
</script>

<style lang="scss">
.ui-fonts {
  display: flex;
  justify-content: center;
  margin: 50px 0 50px 0;

  &__font-item {
    margin-right: 100px;
  }
}
</style>
