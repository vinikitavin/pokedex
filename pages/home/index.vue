<template>
  <div class="main-home">
    <div id="shadow-of-body" class="main-home__shadow" @click="hideBurgerMenu" />
    <div class="main-home__container">
      <div class="main-home__content">
        <div class="main-home__description">
          <h1 class="main-home__title">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p class="main-home__text">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <div class="main-home__button" @click="openPokedexPage">
            <NavButton button-text="See pokemons" />
          </div>
        </div>
        <div class="main-home__poster" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';
import { ResizeMixin } from '@/mixins/resize';

@Component({
  name: 'HomePage',
  layout: 'MainPage',
  components: {
    NavButton
  }
})
export default class HomePage extends Mixins(ResizeMixin) {
  hideBurgerMenu(): void {
    const burgerButton: HTMLElement | null = document.getElementById('hamb-button');
    const bodyScrollHidden: HTMLElement | null = document.querySelector('body');
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    burgerButton!.click();
    setTimeout(hideShadow, 300);

    function hideShadow(): void {
      shadowOfTheMain!.style.display = 'none';
      bodyScrollHidden!.style.overflow = 'auto';
    }
  }

  openPokedexPage(): void {
    this.$router.push('/pokedex');
  }
}
</script>

<style lang="scss" scoped>
.main-home {
  grid-area: 1 / 1 / 4 / 1;
  background: $yellow-gradient;

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

  @media (max-width: 1300px) and (min-width: 375px) {
    &__container {
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 1439px) {
    &__content {
      display: flex;
      padding: 221px 0 0 157px;
      justify-content: center;
    }
  }

  @media (max-width: 1439px) and (min-width: 1301px) {
    &__content {
      padding: 221px 0 0 157px;
    }
  }

  @media (max-width: 1300px) and (min-width: 375px) {
    &__content {
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }
  }

  &__description {
    position: relative;
    padding-bottom: 246px;
    z-index: 10;
  }

  @media (max-width: 1300px) and (min-width: 768px) {
    &__description {
      display: flex;
      width: 730px;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 105px;
    }
  }

  @media (max-width: 767px) and (min-width: 375px) {
    &__description {
      display: flex;
      width: 368px;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 90px;
    }
  }

  &__title {
    width: 506px;
    font-weight: 400;
    margin-bottom: 64px;
  }

  @media (max-width: 1300px) and (min-width: 767px) {
    &__title {
      width: 730px;
      text-align: center;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 767px) and (min-width: 375px) {
    &__title {
      font-size: 42px;
      line-height: 49px;
      width: 368px;
      text-align: center;
      margin-bottom: 5px;
    }
  }

  &__text {
    font-family: 'Karla-Regular', sans-serif;
    font-size: 32px;
    line-height: 37px;
    width: 515px;
    margin-bottom: 64px;
  }

  @media (max-width: 1300px) and (min-width: 767px) {
    &__text {
      width: 639px;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 33px;
    }
  }

  @media (max-width: 767px) and (min-width: 375px) {
    &__text {
      width: 322px;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 42px;
    }
  }

  &__poster {
    width: 793px;
    height: 680px;
    background: url("@/assets/img/banner-pika-desktop.svg") no-repeat, center;
  }

  @media (min-width: 1438px) {
    &__poster {
      width: 706px;
      height: 539px;
      background: url("@/assets/img/banner-pika-tablet.svg") no-repeat, center;
      margin-left: -25px;
    }
  }

  @media (max-width: 1439px) and (min-width: 1301px) {
    &__poster {
      position: absolute;
      top: 190px;
      right: 0;
      margin-top: 0;
    }
  }

  @media (max-width: 1301px) and (min-width: 767px) {
    &__poster {
      width: 706px;
      height: 539px;
      background: url("@/assets/img/banner-pika-tablet.svg") no-repeat, center;
      margin-top: 170px;
      margin-left: 15px;
    }
  }

  @media (max-width: 767px) {
    &__poster {
      width: 375px;
      height: 287px;
      background: url("@/assets/img/banner-pika-mobile.svg") no-repeat, center;
      margin-top: 102px;
      margin-left: 0;
    }
  }
}
</style>
