<template>
  <div class="checkbox">
    <div class="checkbox__types">
      <div class="checkbox__row">
        <input id="bug" v-model="pokeTypes" type="checkbox" value="bug">
        <label for="bug">Bug</label>
        <input id="dark" v-model="pokeTypes" type="checkbox" value="dark">
        <label for="dark">Dark</label>
        <input id="dragon" v-model="pokeTypes" type="checkbox" value="dragon">
        <label for="dragon">Dragon</label>
        <input id="electric" v-model="pokeTypes" type="checkbox" value="electric">
        <label for="electric">Electric</label>
        <input id="normal" v-model="pokeTypes" type="checkbox" value="normal">
        <label for="normal">Normal</label>
        <input id="rock" v-model="pokeTypes" type="checkbox" value="rock">
        <label for="rock">Rock</label>
      </div>
      <div class="checkbox__row">
        <input id="fairy" v-model="pokeTypes" type="checkbox" value="fairy">
        <label for="fairy">Fairy</label>
        <input id="fighting" v-model="pokeTypes" type="checkbox" value="fighting">
        <label for="fighting">Fighting</label>
        <input id="fire" v-model="pokeTypes" type="checkbox" value="fire">
        <label for="fire">Fire</label>
        <input id="flying" v-model="pokeTypes" type="checkbox" value="flying">
        <label for="flying">Flying</label>
        <input id="poison" v-model="pokeTypes" type="checkbox" value="poison">
        <label for="poison">Poison</label>
        <input id="steel" v-model="pokeTypes" type="checkbox" value="steel">
        <label for="steel">Steel</label>
      </div>
      <div class="checkbox__row">
        <input id="ghost" v-model="pokeTypes" type="checkbox" value="ghost">
        <label for="ghost">Ghost</label>
        <input id="glass" v-model="pokeTypes" type="checkbox" value="glass">
        <label for="glass">Glass</label>
        <input id="ground" v-model="pokeTypes" type="checkbox" value="ground">
        <label for="ground">Ground</label>
        <input id="ice" v-model="pokeTypes" type="checkbox" value="ice">
        <label for="ice">Ice</label>
        <input id="psychic" v-model="pokeTypes" type="checkbox" value="psychic">
        <label for="psychic">Psychic</label>
        <input id="water" v-model="pokeTypes" type="checkbox" value="water">
        <label for="water">Water</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'PokeTypesMobile'
})
export default class PokeTypesMobile extends Vue {
pokeTypes: Array<string> = []
}
</script>

<style lang="scss" scoped>
.checkbox {
  width: 120px;
  border-radius: 8px;
  background: $white;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);

  &__types {
    display: flex;
    padding: 14px 33px;
  }
}
</style>
