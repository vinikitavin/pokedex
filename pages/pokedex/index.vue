<template>
  <div class="main-pokedex">
    <div id="shadow-of-body" class="main-pokedex__shadow" @click="hideBurgerMenu" />
    <div class="main-pokedex__container">
      <div class="main-pokedex__content">
        <p class="main-pokedex__title">
          800 <b>Pokemons</b> for you to choose your favorite
        </p>
        <PokeSearch class="main-pokedex__search" @search="getSearchedArr" />
        <div class="main-pokedex__pokemons cards">
          <div class="cards__filter">
            <PokeTypes class="cards__types" @type="getTypedArr" />
            <PokeAttack :full-poke-arr="fullPokeArr" @attack="getAttackArr" />
          </div>
          <div class="cards__items">
            <PokeCard v-for="pokemon in getFilteredPokeArr" :key="pokemon.id" :pokemon="pokemon" />
          </div>
        </div>
        <div class="main-pokedex__buttons">
          <button class="main-pokedex__btn-prev" :disabled="pageNumber === 0" @click="prevPage" />
          <button class="main-pokedex__btn-next" :disabled="pageNumber >= (getFilteredPokeArr.length / 9) - 1" @click="nextPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { routeToPage } from '@/mixins/routeToPage';
import PokeCard from '@/components/PokeCard.vue';
import PokeTypes from '@/components/PokeTypes.vue';
import PokeSearch from '@/components/PokeSearch.vue';
import axios from 'axios';
import { IItem, IPoke } from '~/types/pokemons';

@Component({
  name: 'PokedexPage',
  layout: 'MainPage',
  components: {
    PokeCard,
    PokeTypes,
    PokeSearch
  }
})
export default class PokedexPage extends Mixins(routeToPage) {
  fullPokeArr: Array<IPoke> = []
  searchedPokeArr: Array<IPoke> = []
  searchValue: string = ''
  typedPokeArr: Array<IPoke> = []
  typeValue: Array<string> = []
  minMaxAttack: { min: number; max: number; arr: Array<IPoke>; } = { min: 5, max: 165, arr: [] }
  testValue: number = 0

  pageNumber: number = 0
  size: number = 9

  get testFunction(): number {
    return this.testValue + 5;
  }

  get getFilteredPokeArr(): Array<IPoke> {
    const start = this.pageNumber * this.size;
    const end = start + this.size;

    const searchValueLength = this.searchValue.length;
    const typedValueLength = this.typeValue.length;
    const attackArrLength = this.minMaxAttack.arr.length;

    if (searchValueLength && !typedValueLength && !attackArrLength) {
      return this.getSearchedPokeArr(this.fullPokeArr).slice(start, end);
    }
    if (searchValueLength && typedValueLength && !attackArrLength) {
      return this.getTypedPokeArr(this.searchedPokeArr).slice(start, end);
    }
    if (searchValueLength && typedValueLength && attackArrLength) {
      return this.getAttackPokeArr(this.getTypedPokeArr(this.searchedPokeArr)).slice(start, end);
    }
    if (searchValueLength && !typedValueLength && attackArrLength) {
      return this.getAttackPokeArr(this.searchedPokeArr).slice(start, end);
    }
    if (!searchValueLength && typedValueLength && !attackArrLength) {
      return this.getTypedPokeArr(this.fullPokeArr).slice(start, end);
    }
    if (!searchValueLength && typedValueLength && attackArrLength) {
      return this.getAttackPokeArr(this.typedPokeArr).slice(start, end);
    }
    if (!searchValueLength && !typedValueLength && attackArrLength) {
      return this.minMaxAttack.arr.slice(start, end);
    }
    return this.fullPokeArr.slice(start, end);
  }

  getSearchedPokeArr(pokeArr: Array<IPoke>): Array<IPoke> | [] {
    let data = [];
    if (this.searchValue.trim().length) {
      data = pokeArr.filter((poke: any) => poke.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()));
      this.searchedPokeArr = data;
      return data;
    }
    return [];
  }

  getTypedPokeArr(pokeArr: Array<IPoke>): Array<IPoke> {
    let data: Array<any> = [];
    if (this.typeValue.length) {
      data = pokeArr.filter((item: IPoke) => {
        if (typeof item.type_2 !== 'undefined') {
          return this.typeValue.includes(item.type_1) && this.typeValue.includes(item.type_2.type.name);
        }
        return this.typeValue.includes(item.type_1);
      });
      this.typedPokeArr = data;
      return data;
    }
    return data;
  }

  getAttackPokeArr(pokeArr: Array<IPoke>): Array<IPoke> {
    return pokeArr.filter((pokemon: IPoke) => pokemon.stats.attack >=
        this.minMaxAttack.min &&
        pokemon.stats.attack <=
        this.minMaxAttack.max);
  }

  // Получение финального массива
  //
  // get getPokeCard(): Array<object> {
  //   let data: Array<object> = [];
  //   const start = this.pageNumber * this.size;
  //   const end = start + this.size;
  //   if (this.pokeTypes.length) {
  //     data = this.fullPokeArr.filter((item) => this.pokeTypes.includes(item.type_1)).slice(start, end);
  //   } else {
  //     data = this.fullPokeArr.slice(start, end);
  //   }
  //   return data;
  // }
  //
  // Тут повесить финальный массив, который будет
  //
  // get getPokeArrLength(): number {
  //   if (this.pokeTypes.length) {
  //     return this.fullPokeArr.filter((item) => this.pokeTypes.includes(item.type_1)).length;
  //   } return this.fullPokeArr.length;
  // }

  nextPage(): void {
    this.pageNumber += 1;
  }

  prevPage(): void {
    this.pageNumber -= 1;
  }

  async getFullPokeArr(): Promise<void> {
    try {
      const getPokeLink = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=648&offset=0');
      const pokeResponse = await Promise.all(
        getPokeLink.data.results.map((item: IItem) => axios.get(item.url))
      );
      const pokemons: IPoke[] = pokeResponse.map((url: any) => ({
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
        type_2: { ...url.data.types }[1]
      }));
      this.fullPokeArr = pokemons;
    } catch (error) {
      console.log(error);
    }
  }

  getSearchedArr(data: string): void {
    this.searchValue = data;
  }

  getTypedArr(data: Array<string>): void {
    this.typeValue = data;
  }

  getAttackArr(data: { min: number; max: number; arr: Array<IPoke>}): void {
    this.minMaxAttack = data;
  }

  mounted(): void {
    this.getFullPokeArr();
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
    margin-bottom: 36px;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  &__btn-prev,
  &__btn-next {
    height: 50px;
    width: 50px;
  }

  &__btn-prev {
    background: url("@/assets/img/arrow-left.png");
  }

  &__btn-prev:disabled {
    opacity: 0.2;
  }

  &__btn-next {
    background: url("@/assets/img/arrow-right.png");
  }

  &__btn-next:disabled {
    opacity: 0.2;
  }

  .cards {
    &__items {
      display: grid;
      grid-template-columns: 352px 352px 352px;
      grid-template-rows: 137px 137px 137px;
      column-gap: 34px;
      row-gap: 45px;
    }

    &__filter {
      display: flex;
      margin-bottom: 53px;
    }

    &__types {
      margin-right: 64px;
    }
  }
}
</style>
