<template>
  <div class="main-pokedex">
    <div id="shadow-of-body" class="main-pokedex__shadow" @click="hideByShadow" />
    <div class="main-pokedex__container">
      <div class="main-pokedex__content">
        <div class="main-pokedex__title-wrapper">
          <p class="main-pokedex__title">
            800 <b>Pokemons</b> for you to choose your favorite
          </p>
        </div>
        <div class="main-pokedex__search">
          <PokeSearch @search="getSearchedArr" />
        </div>
        <div class="main-pokedex__pokemons cards">
          <div v-if="screenWidth >= 750" class="cards__filter">
            <PokeTypes class="cards__types" />
            <PokeAttack :full-poke-arr="fullPokeArr" />
          </div>
          <div v-else class="cards__filter">
            <button class="cards__filter-button" @click="showFilterMenu">
              Filter
            </button>
          </div>
          <div class="cards__items">
            <PokeCard
              v-for="pokemon in getFilteredPokeArr"
              :key="pokemon.id"
              :pokemon="pokemon"
              @cardClick="cardClick"
            />
          </div>
          <transition name="fade">
            <div v-if="isOpenedPokeCharactCard" class="cards__charac">
              <PokeCharacteristics
                v-for="cardItem in cardItemArr"
                :key="cardItem.id"
                :close-charact-card="closeCharactCard"
                :card-item="cardItem"
              />
            </div>
          </transition>
        </div>
        <div v-if="screenWidth > 750" class="main-pokedex__buttons">
          <button class="main-pokedex__btn-prev" :disabled="pageNumber === 0" @click="prevPage" />
          <button class="main-pokedex__btn-next" :disabled="pageNumber >= (pokemonsArray.length / changePokeCardsQuantity) - 1" @click="nextPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { transitions } from '~/mixins/transitions';
import PokeCard from '@/components/PokeCard.vue';
import PokeTypes from '@/components/PokeTypes.vue';
import PokeSearch from '@/components/PokeSearch.vue';
import { IPoke } from '@/types/pokemons';
import { getModule } from 'vuex-module-decorators';
import SetTypeValue from '@/store/setTypeValue';
import SetAttackArray from '@/store/setAttackArray';
import { getFullPokeArr } from '@/mixins/getFullPokeArr';

@Component({
  name: 'PokedexPage',
  layout: 'MainPage',
  components: {
    PokeCard,
    PokeTypes,
    PokeSearch
  }
})
export default class PokedexPage extends Mixins(transitions, getFullPokeArr) {
  searchedPokeArr: Array<IPoke> = []
  searchValue: string = ''
  typedPokeArr: Array<IPoke> = []
  storeTypeValue: SetTypeValue = getModule(SetTypeValue)
  storeMinMaxAttackArr: SetAttackArray = getModule(SetAttackArray)
  pokemonsArray: Array<IPoke> = []

  pageNumber: number = 0
  size: number = 9

  cardItemArr: Array<IPoke> = []

  showFilterMenu(): void {
    const filterMenuInput = document.getElementById('filter-menu') as HTMLElement | null;
    filterMenuInput!.checked = true;
    this.shadowOfBodyAndStopScrolling();
  }

  get changePokeCardsQuantity(): number {
    if (this.screenWidth > 1300) {
      this.size = 9;
      return 9;
    }
    if (this.screenWidth <= 1300 && this.screenWidth >= 768) {
      this.size = 6;
      return 6;
    }
    this.size = 648;
    return 648;
  }

  closeCharactCard(): void {
    this.isOpenedPokeCharactCard = false;
    this.hideByShadow();
  }

  cardClick(cardId: number): void {
    this.cardItemArr = this.getFilteredPokeArr.filter((pokeObj: IPoke) => pokeObj.id === cardId);
    this.isOpenedPokeCharactCard = true;
    this.shadowOfBodyAndStopScrolling();
  }

  get getFilteredPokeArr(): Array<IPoke> {
    const start = this.pageNumber * this.size;
    const end = start + this.size;

    const searchValueLength = this.searchValue.length;
    const typedValueLength = this.storeTypeValue.GetTypeValue.length;
    const attackArrLength = this.storeMinMaxAttackArr.GetAttackArray.length;

    console.log('до 1');
    if (searchValueLength && !typedValueLength && !attackArrLength) { // 1 // +++++++++++++++++++++++++++++++++++++++++++++++
      console.log('1');
      this.pokemonsArray = this.getSearchedPokeArr(this.fullPokeArr);
      return this.pokemonsArray.slice(start, end);
    }
    console.log('до 1-2');
    if (searchValueLength && typedValueLength && !attackArrLength) {
      if (this.getSearchedPokeArr(this.typedPokeArr).length) { // 21 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        console.log('21');
        this.pokemonsArray = this.getSearchedPokeArr(this.typedPokeArr);
        return this.pokemonsArray.slice(start, end);
      }
      if (this.getTypedPokeArr(this.getSearchedPokeArr(this.fullPokeArr)).length) { // 12 // ++++++++++++++++++++++++++++++++++
        console.log('12');
        this.pokemonsArray = this.getTypedPokeArr(this.getSearchedPokeArr(this.fullPokeArr));
        return this.pokemonsArray.slice(start, end);
      }
    }
    console.log('до 1-3');
    if (searchValueLength && !typedValueLength && attackArrLength) { // 13 // 31 // +++++++++++++++++++++++++++++++++++++++
      if (this.getAttackPokeArr(this.searchedPokeArr).length) {
        console.log('13');
        this.pokemonsArray = this.getAttackPokeArr(this.searchedPokeArr);
        return this.pokemonsArray.slice(start, end);
      }
      console.log('31');
      this.pokemonsArray = this.getSearchedPokeArr(this.storeMinMaxAttackArr.GetAttackArray);
      return this.pokemonsArray.slice(start, end);
    }
    console.log('до 2');
    if (!searchValueLength && typedValueLength && !attackArrLength) {
      console.log('2');
      this.pokemonsArray = this.getTypedPokeArr(this.fullPokeArr);
      return this.pokemonsArray.slice(start, end);
    }
    console.log('до 2-3');
    if (!searchValueLength && typedValueLength && attackArrLength) { // 23 // 32 // +++++++++++++++++++++++++++++++++++++++++
      if (this.getAttackPokeArr(this.typedPokeArr).length) {
        console.log('23');
        this.pokemonsArray = this.getAttackPokeArr(this.typedPokeArr);
        return this.pokemonsArray.slice(start, end);
      }
      console.log('32');
      this.pokemonsArray = this.getTypedPokeArr(this.storeMinMaxAttackArr.GetAttackArray);
      return this.pokemonsArray.slice(start, end);
    }
    console.log('до 3');
    if (!searchValueLength && !typedValueLength && attackArrLength) {
      console.log('3');
      this.pokemonsArray = this.storeMinMaxAttackArr.GetAttackArray;
      return this.pokemonsArray.slice(start, end);
    }
    console.log('до 1-2-3');
    if (searchValueLength && typedValueLength && attackArrLength) {
      if (this.getAttackPokeArr(this.getSearchedPokeArr(this.typedPokeArr)).length) { // 213 // +++++++++++++++++++++++++++++++++
        console.log('213');
        this.pokemonsArray = this.getAttackPokeArr(this.getSearchedPokeArr(this.typedPokeArr));
        return this.pokemonsArray.slice(start, end);
      }
      if (this.getTypedPokeArr(this.getSearchedPokeArr(this.storeMinMaxAttackArr.GetAttackArray)).length) { // 312 // +++++++++++++
        console.log('312');
        this.pokemonsArray = this.getTypedPokeArr(this.getSearchedPokeArr(this.storeMinMaxAttackArr.GetAttackArray));
        return this.pokemonsArray.slice(start, end);
      }
      if (this.getTypedPokeArr(this.getAttackPokeArr(this.searchedPokeArr)).length) { // 132 // +++++++++++++++++++++++++++++++++++
        console.log('132');
        this.pokemonsArray = this.getTypedPokeArr(this.getSearchedPokeArr(this.storeMinMaxAttackArr.GetAttackArray));
        return this.pokemonsArray.slice(start, end);
      }
      if (this.getSearchedPokeArr(this.getTypedPokeArr(this.storeMinMaxAttackArr.GetAttackArray)).length) { // 321 // ++++++++------
        console.log('321');
        this.pokemonsArray = this.getSearchedPokeArr(this.getTypedPokeArr(this.storeMinMaxAttackArr.GetAttackArray));
        return this.pokemonsArray.slice(start, end);
      }
      if (this.getSearchedPokeArr(this.getAttackPokeArr(this.typedPokeArr)).length) { // 231 // +++++++++++++++++----------------------
        console.log('231');
        this.pokemonsArray = this.getSearchedPokeArr(this.getAttackPokeArr(this.typedPokeArr));
        return this.pokemonsArray.slice(start, end);
      }
      if (this.getAttackPokeArr(this.getTypedPokeArr(this.searchedPokeArr)).length) { // 123 // ++++++++++++++++++++++++++++++++
        console.log('123');
        this.pokemonsArray = this.getAttackPokeArr(this.getTypedPokeArr(this.searchedPokeArr));
        return this.pokemonsArray.slice(start, end);
      }
    }
    console.log('до full');
    this.pokemonsArray = this.fullPokeArr;
    return this.pokemonsArray.slice(start, end);
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
    if (this.storeTypeValue.GetTypeValue.length) {
      data = pokeArr.filter((item: IPoke) => {
        if (typeof item.type_2 !== 'undefined') {
          return this.storeTypeValue.GetTypeValue.includes(item.type_1) && this.storeTypeValue.GetTypeValue.includes(item.type_2.type.name);
        }
        return this.storeTypeValue.GetTypeValue.includes(item.type_1);
      });
      this.typedPokeArr = data;
      return data;
    }
    return data;
  }

  getAttackPokeArr(pokeArr: Array<IPoke>): Array<IPoke> {
    return pokeArr.filter((pokemon: IPoke) => pokemon.stats.attack >=
        this.storeMinMaxAttackArr.GetMinAttack &&
        pokemon.stats.attack <=
        this.storeMinMaxAttackArr.GetMaxAttack);
  }

  nextPage(): void {
    this.pageNumber += 1;
  }

  prevPage(): void {
    this.pageNumber -= 1;
  }

  // async getFullPokeArr(): Promise<void> {
  //   try {
  //     const getPokeLink = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=648&offset=0');
  //     const pokeResponse = await Promise.all(
  //       getPokeLink.data.results.map((item: IItem) => axios.get(item.url))
  //     );
  //     const pokemons: IPoke[] = pokeResponse.map((url: any) => ({
  //       abilities: {
  //         name_1: url.data.abilities[0].ability.name,
  //         name_2: url.data.abilities[1],
  //         name_3: url.data.abilities[2]
  //       },
  //       id: url.data.id,
  //       name: url.data.name,
  //       img: url.data.sprites.other.dream_world.front_default,
  //       stats: {
  //         hp: { ...url.data.stats }[0].base_stat,
  //         attack: { ...url.data.stats }[1].base_stat,
  //         defense: { ...url.data.stats }[2].base_stat,
  //         special_attack: { ...url.data.stats }[3].base_stat,
  //         special_defense: { ...url.data.stats }[4].base_stat,
  //         speed: { ...url.data.stats }[5].base_stat
  //       },
  //       type_1: { ...url.data.types }[0].type.name,
  //       type_2: { ...url.data.types }[1]
  //     }));
  //     this.fullPokeArr = pokemons;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  getSearchedArr(data: string): void {
    this.searchValue = data;
  }

  // getAttackArrFromAttackComponent(data: { min: number; max: number; arr: Array<IPoke>}): void {
  //   this.storeMinMaxAttackArr.GetMinAttack = data;
  // }

  async mounted(): Promise<void> {
    await this.getFullPokeArr();
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
    z-index: 99;
  }

  &__shadow-card {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: $dark;
    opacity: 0.5;
    cursor: pointer;
    z-index: 100;
  }

  &__container {
    display: flex;
    justify-content: center;
    padding: 166px 0 119.5px 0;
  }

  @media (max-width: 650px) and (min-width: 375px) {
    &__container {
      padding: 85px 0 119.5px 0;
    }
  }

  &__title-wrapper {
    display: flex;
    justify-content: center;
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

  @media (max-width: 1300px) and (min-width: 375px) {
    &__title {
      width: 615px;
    }
  }

  @media (max-width: 800px) and (min-width: 375px) {
    &__title {
      width: 330px;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 57px;
    }
  }

  &__search {
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
  }

  @media (max-width: 800px) and (min-width: 375px) {
    &__search {
      margin-bottom: 16px;
    }
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
      justify-content: center;
    }

    @media (max-width: 1300px) and (min-width: 750px) {
      &__items {
        grid-template-columns: 352px 352px;
        grid-template-rows: 137px 137px;
        column-gap: 19px;
        row-gap: 24px;
      }
    }

    @media (max-width: 750px) and (min-width: 375px) {
      &__items {
        grid-template-columns: 337px;
        grid-template-rows: 140px;
      }
    }

    &__filter {
      display: flex;
      margin-bottom: 53px;
    }

    @media (max-width: 750px) and (min-width: 650px) {
      &__filter {
        display: grid;
        justify-content: center;
        justify-items: center;
        margin-bottom: 29px;
      }
    }

    @media (max-width: 650px) and (min-width: 375px) {
      &__filter {
        display: grid;
        justify-content: start;
        margin: 0 0 29px 8px;
      }
    }

    &__filter-button {
      font-family: 'SourceSansPro-Regular', sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $black;
      width: 77px;
      height: 20px;
      border-radius: 8px;
      background: $white;
      text-align: left;
      padding-left: 15px;
    }

    &__close-icon {
      display: block;
      position: absolute;
      right: 26px;
      top: 16px;
      z-index: 1000;
    }

    &__types {
      margin-right: 64px;
    }

    @media (max-width: 750px) and (min-width: 375px) {
      &__types {
        margin: 0 0 10px 0;
      }
    }
  }
}

.shadow {
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

.fade-enter-active, .fade-leave-active {
  transition: 0.3s all;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
