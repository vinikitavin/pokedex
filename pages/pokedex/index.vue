<template>
  <div class="main-pokedex">
    <div id="shadow-of-body" class="main-pokedex__shadow" @click="hideBurgerMenu" />
    <div class="main-pokedex__container">
      <div class="main-pokedex__content">
        <p class="main-pokedex__title">
          800 <b>Pokemons</b> for you to choose your favorite
        </p>
        <input class="main-pokedex__search" placeholder="Encuentra tu pokémon...">
        <div class="main-pokedex__pokemons cards">
          <div class="cards__filter" />
          <div class="cards__items">
            <PokeCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemons="pokemon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { routeToPage } from '@/mixins/routeToPage';
import axios from 'axios';
import { IItem, IPoke } from '~/types/pokemons';

@Component({
  name: 'PokedexPage',
  layout: 'MainPage'
})
export default class PokedexPage extends Mixins(routeToPage) {
  async asyncData(): {
    try {
      const getPokeLink = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const pokeResponse = await Promise.all(
        getPokeLink.data.results.map((item: IItem) => axios.get(item.url))
      );
      const pokeResult: IPoke = pokeResponse.map((url) => ({
        id: url.data.id,
        name: url.data.name,
        img: url.data.sprites.other.dream_world.front_default,
        stats: {
          hp: { ...url.data.stats }[0].base_stat,
          attack: { ...url.data.stats }[1].base_stat,
          defense: { ...url.data.stats }[2].base_stat,
          special_attack: { ...url.data.stats }[3].base_stat,
          special_defense: { ...url.data.stats }[4].base_stat,
          speed: { ...url.data.stats }[5].base_stat
        },
        type_1: { ...url.data.types }[0].type.name,
        type_2: { ...url.data.types }
      }));
      return { pokeResult };
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
.main-pokedex {
  grid-area: 1 / 1 / 4 / 1;
  background: $grey-gradient;

  &__shadow {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: $dark;
    opacity: 0.5;
    cursor: pointer;
    z-index: 99;
  }

  &__container {
    display: flex;
    justify-content: center;
    padding: 166px 157px 119.5px 158px;
  }

  &__content {
  }

  &__title {
    font-family: 'Karla-Regular', sans-serif;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    letter-spacing: 3px;
    color: $black;
    margin-bottom: 33px;
  }

  &__search {
    width: 1088px;
    height: 53px;
    background: $white;
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 40px;
    border: 1px solid $white;
    padding-left: 31px;
    margin-bottom: 65px;
  }

  &__search::placeholder {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: $dark;
  }
}
</style>
