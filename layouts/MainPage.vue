<template>
  <div class="website">
    <TheHeader v-if="isDesktop || isTablet" />
    <TheHeaderMobile v-if="isMobile" :full-poke-arr="fullPokeArr" />
    <Nuxt @fullPokeArray="getFullPokeArray" />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { ResizeMixin } from '@/mixins/resize';
import TheHeader from '@/components/TheHeader.vue';
import TheHeaderMobile from '@/components/TheHeaderMobile.vue';
import TheFooter from '@/components/TheFooter.vue';
import { IPoke } from '@/types/pokemons';

@Component({
  name: 'MainPage',
  components: {
    TheHeader,
    TheHeaderMobile,
    TheFooter
  }
})
export default class MainPage extends Mixins(ResizeMixin) {
  fullPokeArr: Array<IPoke> = []

  getFullPokeArray(fullPokeArray: Array<IPoke>): void {
    this.fullPokeArr = fullPokeArray;
  }

  @Watch('screenWidth')
  private handler(): void {
    this.definedScreenWidth();
  }
}
</script>

<style lang="scss" scoped>
.website {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 93px auto 88px;
}

@media (max-width: 651px) {
  .website {
    grid-template-rows: 56px auto 62px;
  }
}
</style>
