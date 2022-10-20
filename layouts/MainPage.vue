<template>
  <div class="website">
    <TheHeader v-if="isDesktop" />
    <TheHeaderMobile v-else />
    <Nuxt class="shadow" />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { vueWindowSizeMixin } from 'vue-window-size';
import TheHeader from '@/components/TheHeader.vue';
import TheHeaderMobile from '@/components/TheHeaderMobile.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
  name: 'MainPage',
  components: {
    TheHeader,
    TheHeaderMobile,
    TheFooter
  }
})
export default class MainPage extends Vue {
  isDesktop!: boolean

  created(): boolean {
    const screenWidth = vueWindowSizeMixin.computed.windowWidth();
    if (screenWidth < 601) {
      this.isDesktop = false;
      return this.isDesktop;
    }
    this.isDesktop = true;
    return this.isDesktop;
  }
}
</script>

<style lang="scss" scoped>
.website {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 93px auto 88px;
}

@media (max-width: 601px) {
  .website {
    grid-template-rows: 56px auto 62px;
  }
}

.shadow {
  //background: $dark;
  //opacity: 0.9;
}
</style>
