<template>
  <div class="poke-card">
    <div class="poke-card__prop prop">
      <div class="prop__name">
        {{ name }}
      </div>
      <div class="prop__characteristics">
        <div class="prop__attack" />
        <div class="prop__defense" />
      </div>
      <div class="prop__types">
        <NavButton class="prop__type-one" button-text="" />
        <NavButton class="prop__type-two" button-text="" />
      </div>
    </div>
    <div class="poke-card__img" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';

@Component({
  name: 'PokeCard',
  components: {
    NavButton
  }
})
export default class PokeCard extends Vue {
  @Prop(Object) readonly pokemon: Object | undefined
}

</script>

<style lang="scss" scoped>
.poke-card {
  width: 352px;
  height: 137px;
  border-radius: 8px;
}
</style>
