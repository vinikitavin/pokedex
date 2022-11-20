<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <img class="header__logo" src="@/assets/img/logo.svg" alt="logo" @click="routeToHomePageByLogo">
        <div class="header__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <NuxtLink class="nav__link" to="/home">
                Home
              </NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink class="nav__link" to="/pokedex">
                Pokédex
              </NuxtLink>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="https://www.pokemon.com/" target="_blank">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { transitions } from '~/mixins/transitions';

@Component({
  name: 'TheHeader'
})

export default class TheHeader extends Mixins(transitions) {}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  grid-area: 1 / 1 / 2 / 1;
  background-color: $third;
  box-shadow: $shadow;

  @media (min-width: 1441px) {
    &__container {
      display: flex;
      justify-content: center;
      padding: 12px 0 12px 0;
    }
  }

  @media (max-width: 1440px) and (min-width: 1281px) {
    &__container {
      padding: 12px 10% 12px 10.9%;
    }
  }

  @media (max-width: 1280px) and (min-width: 601px) {
    &__container {
      padding: 24px 6.8% 24px 2.6%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1441px) {
    &__content {
      width: 1140px;
    }
  }

  &__logo {
    width: 157px;
    height: 63px;
    cursor: pointer;
  }

  @media (max-width: 1280px) and (min-width: 601px) {
    &__logo {
      width: 121px;
      height: 45px;
    }
  }

  &__nav {
    padding-top: 9px;
  }

  @media (max-width: 1280px) and (min-width: 601px) {
    &__nav {
      padding-top: 0;
    }
  }
}

.nav {

  &__list {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }

  @media (max-width: 1280px) and (min-width: 601px) {
    &__list {
      width: 390px;
    }
  }

  &__link {
    font-family: 'Karla-Regular', sans-serif;
    font-size: 25px;
    line-height: 29px;
    color: $dark;
  }

  @media (max-width: 1280px) and (min-width: 601px) {
    &__link {
      font-size: 19px;
      line-height: 22px;
    }
  }
}

.nuxt-link-active {
  position: relative;
}

.nuxt-link-active:after {
  content: "";
  display: block;
  position: absolute;
  top: 44px;
  width: 100%;
  height: 3px;
  background-color: $dark;
  border-radius: 5px;
}
</style>
