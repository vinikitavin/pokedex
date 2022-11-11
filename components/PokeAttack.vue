<template>
  <div class="poke-attack">
    <label for="from">From</label>
    <input
      id="from"
      v-model.number="minAttack"
      class="poke-attack__input"
      type="number"
    >
    <label for="to">To</label>
    <input
      id="to"
      v-model.number="maxAttack"
      class="poke-attack__input"
      type="number"
    >
    <button class="poke-attack__button" type="button" @click="getAttackPokeArr">
      Apply
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { IPoke } from '~/types/pokemons';

@Component({
  name: 'PokeAttack'
})
export default class PokeAttack extends Vue {
  minAttack: number = 5
  maxAttack: number = 165
  attackPokeArr: Array<IPoke> = []

  @Prop({ required: true }) readonly fullPokeArr!: Array<object>

  getAttackPokeArr(): void {
    this.attackPokeArr = this.fullPokeArr.filter((pokemon: IPoke) => pokemon.stats.attack >=
      this.minAttack &&
      pokemon.stats.attack <=
      this.maxAttack);
  }

  @Watch('attackPokeArr')

  attack(): void {
    this.$emit('attack', {
      min: this.minAttack,
      max: this.maxAttack,
      arr: this.attackPokeArr
    });
  }
}
</script>

<style scoped>

</style>
