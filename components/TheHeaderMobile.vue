<template>
  <header class="header-mobile">
    <img
      alt="logo-mobile"
      class="header-mobile__logo"
      src="@/assets/img/logo-mobile.svg"
      @click="routeToHomePageByLogo"
    >
    <div class="header-mobile__humb-wrapper">
      <input id="side-menu" class="header-mobile__side-menu" type="checkbox">
      <label class="header-mobile__hamb" for="side-menu">
        <span id="hamb-button" class="header-mobile__hamb-line" @click="shadowOfBodyAndStopScrolling" />
      </label>
      <nav class="header-mobile__nav">
        <ul class="header-mobile__menu hamb">
          <li class="hamb__item">
            <img alt="logo" class="hamb__logo" src="@/assets/img/logo.svg" @click="routeToHomePageByLogo">
          </li>
          <li class="hamb__item" @click="routeToPagesByNuxtLink">
            <NuxtLink class="hamb__link" to="/home">
              Home
            </NuxtLink>
          </li>
          <li class="hamb__item" @click="routeToPagesByNuxtLink">
            <NuxtLink class="hamb__link" to="/pokedex">
              Pokédex
            </NuxtLink>
          </li>
          <li class="hamb__item">
            <a class="hamb__link" href="https://www.pokemon.com/" target="_blank">
              Documentation
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header-mobile__filter-wrapper">
      <input id="filter-menu" class="header-mobile__filter-input" type="checkbox">
      <label class="header-mobile__filter-button" for="filter-menu">Filter</label>
      <nav class="header-mobile__filter-nav">
        <ul class="header-mobile__filter-menu">
          <div class="header-mobile__filter-types types">
            <div class="types__filter-head">
              <p class="types__head">
                Type
              </p>
              <img
                id="close-filter"
                alt="close-icon"
                class="types__close-filter-icon"
                src="@/assets/img/close-icon.svg"
                @click="closeFilterMenu"
              >
            </div>
            <PokeTypes />
          </div>
          <div class="header-mobile__filter-attack attack">
            <div class="attack__filter-head">
              <p class="attack__head">
                Attack
              </p>
            </div>
            <div class="attack__attack-component">
              <PokeAttack :full-poke-arr="fullPokeArr" />
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { routeToPage } from '@/mixins/routeToPage';

@Component({
  name: 'TheHeaderMobile'
})
export default class TheHeaderMobile extends Mixins(routeToPage) {
  @Prop({ required: false }) readonly fullPokeArr!: Array<object>

  closeFilterMenu(): void {
    const filterMenuInput = document.getElementById('filter-menu') as HTMLElement | null;
    filterMenuInput!.checked = false;
    this.hideGoingDownMenu();
  }
}
</script>

<style lang="scss" scoped>
.header-mobile {
  background: $third;
  box-shadow: 0 4px 16px rgba(1, 28, 64, 0.2);
  position: relative;
  width: 100%;
  grid-area: 1 / 1 / 2 / 1;
  z-index: 999;

  &__logo {
    padding: 22px 0 0 26px;
    cursor: pointer;
  }

  &__nav {
    width: 100%;
    height: 300px;
    position: fixed;
    background: $yellow-gradient;
    overflow: hidden;
    border-radius: 0 0 16px 16px;
  }

  &__nav {
    margin-top: -44px;
    max-height: 0;
    transition: .2s ease-out;
  }

  &__hamb {
    cursor: pointer;
    float: right;
    padding-right: 26px;
  }

  &__hamb-line {
    background: $dark;
    display: block;
    width: 31px;
    height: 5.5px;
    border-radius: 2px;
    position: relative;
    margin-top: -13px;

  }

  &__hamb-line::before,
  &__hamb-line::after {
    background: $dark;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
    border-radius: 2px;
  }

  &__hamb-line::before {
    top: 8px;
  }

  &__hamb-line::after {
    top: -8px;
  }

  &__side-menu {
    display: none;
  }

  &__side-menu:checked ~ nav {
    max-height: 100%;
  }

  &__side-menu:checked ~ &__hamb &__hamb-line {
    background: transparent;
  }

  &__side-menu:checked ~ &__hamb &__hamb-line::before {
    transform: rotate(-45deg);
    top: 0;
  }

  &__side-menu:checked ~ &__hamb &__hamb-line::after {
    transform: rotate(45deg);
    top: 0;
  }

  &__filter-nav {
    width: 100%;
    height: 470px;
    position: fixed;
    background: $yellow-gradient;
    overflow: hidden;
    border-radius: 0 0 16px 16px;
    z-index: 999;
  }

  &__filter-menu {
    padding: 16px 27px;
  }

  &__filter-types {
    padding: 16px 17px;
    border-bottom: 2px solid $white;
  }

  &__close-filter-icon {
    z-index: 999;
  }

  &__filter-input {
    display: none;
  }

  &__filter-button {
    display: none;
  }

  &__filter-nav {
    margin-top: -44px;
    max-height: 0;
    transition: .2s ease-out;
  }

  &__filter-input:checked ~ nav {
    max-height: 100%;
  }

  &__filter-input:checked ~ &__filter-button {
    background: transparent;
  }

  &__filter-attack {
    margin-top: 22px;
    padding: 0 17px;
  }
}

.hamb {

  &__item {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  &__link {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 27px;
    line-height: 32px;
    color: $dark;
    margin-bottom: 16px;
  }

  &__logo {
    width: 138px;
    height: 51px;
    margin: 37px 0 36px 0;
    cursor: pointer;
  }
}

.types {
  &__head {
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 27px;
    color: $black;
  }

  &__filter-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
}

.attack {

  &__attack-component {
    display: flex;
    justify-content: center;
  }

  &__head {
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 27px;
    color: $black;
  }
}
</style>
