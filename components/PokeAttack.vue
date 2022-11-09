<template>
  <div class="poke-attack">
    <label for="from">From</label>
    <input
      id="from"
      v-model.number="minAttack"
      class="poke-attack__input"
      type="number"
      min="0"
    >
    <label for="to">To</label>
    <input
      id="to"
      v-model.number="maxAttack"
      class="poke-attack__input"
      type="number"
      max="100"
    >
    <button class="poke-attack__button" type="button" @click="getAttackFilter()">
      Apply
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IPoke, IUrl } from '~/types/pokemons';

@Component({
  name: 'PokeAttack'
})
export default class PokeAttack extends Vue {
  minAttack: number = 0
  maxAttack: number = 100
  arrForFilter: Array<object> | undefined = []

  @Prop({ required: true }) readonly fullPokeArr!: Array<object>

  getMaxValue(): object {
    return this.fullPokeArr.reduce((acc: any, rec: any) => (acc.stats.attack > rec.stats.attack ? acc : rec));
  }

  getAttackFilter(): void {
    this.fullPokeArr.filter((pokemon: any) => pokemon.stats.attack >= this.minAttack && pokemon.stats.attack <= this.maxAttack);
    this.arrForFilter = this.fullPokeArr;
  }
}
</script>

<style scoped>

</style>
