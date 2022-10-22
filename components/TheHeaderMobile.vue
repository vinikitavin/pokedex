<template>
  <header class="header-mobile">
    <img alt="logo-mobile" class="header-mobile__logo" src="@/assets/img/logo-mobile.svg" @click="routeToHomePage()">
    <input id="side-menu" class="header-mobile__side-menu" type="checkbox">
    <label class="header-mobile__hamb" for="side-menu">
      <span id="hamb-button" class="header-mobile__hamb-line" @click="shadowOfBodyAndStopScrolling()" />
    </label>
    <nav class="header-mobile__nav">
      <ul class="header-mobile__menu hamb">
        <li class="hamb__item">
          <img alt="logo" class="hamb__logo" src="@/assets/img/logo.svg" @click="routeToHomePage()">
        </li>
        <li class="hamb__item">
          <NuxtLink class="hamb__link" to="/home">
            Home
          </NuxtLink>
        </li>
        <li class="hamb__item">
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
  </header>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { routeToHomePage } from '@/mixins/routeToHomePage';

@Component({
  name: 'TheHeaderMobile'
})
export default class TheHeaderMobile extends Mixins(routeToHomePage) {
  shadowOfBodyAndStopScrolling(): void {
    const bodyScrollHidden: HTMLElement | null = document.querySelector('body');
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    shadowOfTheMain!.style.display = 'block';
    bodyScrollHidden!.style.overflow = 'hidden';
  }

  reloadPageByLogo(): void {
    if (this.$route.path === '/home') {
      document.location.reload();
    } this.$router.push('/home');
  }

  reloadPageByHome(): void {
    if (this.$route.path === '/home') {
      document.location.reload();
    } this.$router.push('/home');
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
}

.header-mobile__logo {
  padding: 22px 0 0 26px;
  cursor: pointer;
}

.header-mobile__nav {
  width: 100%;
  height: 300px;
  position: fixed;
  background: linear-gradient(180deg, $third 0%, $primary 100%);
  overflow: hidden;
  border-radius: 0 0 16px 16px;
}

.header-mobile__nav {
  margin-top: -44px;
  max-height: 0;
  transition: .3s ease-out;
}

.header-mobile__hamb {
  cursor: pointer;
  float: right;
  padding-right: 26px;
}

.header-mobile__hamb-line {
  background: $dark;
  display: block;
  width: 31px;
  height: 5.5px;
  border-radius: 2px;
  position: relative;
  margin-top: -13px;

}

.header-mobile__hamb-line::before,
.header-mobile__hamb-line::after {
  background: $dark;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
  border-radius: 2px;
}

.header-mobile__hamb-line::before {
  top: 8px;
}

.header-mobile__hamb-line::after {
  top: -8px;
}

.header-mobile__side-menu {
  display: none;
}

.header-mobile__side-menu:checked ~ nav {
  max-height: 100%;
}

.header-mobile__side-menu:checked ~ .header-mobile__hamb .header-mobile__hamb-line {
  background: transparent;
}

.header-mobile__side-menu:checked ~ .header-mobile__hamb .header-mobile__hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}

.header-mobile__side-menu:checked ~ .header-mobile__hamb .header-mobile__hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}

.hamb__item {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.hamb__link {
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 27px;
  line-height: 32px;
  color: $dark;
  margin-bottom: 16px;
}

.hamb__logo {
  width: 138px;
  height: 51px;
  margin: 37px 0 36px 0;
  cursor: pointer;
}
</style>
