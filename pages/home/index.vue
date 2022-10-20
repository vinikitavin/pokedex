<template>
  <div class="main-home">
    <div id="shadow-of-body" class="main-home__shadow" @click="hideBurgerMenu()" />
    <div class="main-home__container">
      <div class="main-home__content">
        <div class="main-home__description">
          <h1 class="main-home__title">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p class="main-home__text">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <div class="main-home__button" @click="openPokedexPage()">
            <NavButton button-text="See pokemons" />
          </div>
        </div>
        <img v-if="isDesktop" alt="banner-pika" class="main-home__poster" src="@/assets/img/banner-pika-desktop.svg">
        <img v-if="isTablet" alt="banner-pika" class="main-home__poster" src="@/assets/img/banner-pika-tablet.svg">
        <img v-if="isMobile" alt="banner-pika" class="main-home__poster" src="@/assets/img/banner-pika-mobile.svg">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';
import { vueWindowSizeMixin } from 'vue-window-size';

@Component({
  name: 'HomePage',
  layout: 'MainPage',
  components: {
    NavButton
  }
})
export default class HomePage extends Vue {
  isDesktop!: boolean
  isTablet!: boolean
  isMobile!: boolean

  created(): [boolean, boolean, boolean] | undefined {
    const screenWidth: number = vueWindowSizeMixin.computed.windowWidth();
    if (screenWidth > 1300) {
      this.isDesktop = true;
      this.isTablet = false;
      this.isMobile = false;
      return [this.isDesktop, this.isTablet, this.isMobile];
    }
    if (screenWidth > 767) {
      this.isDesktop = false;
      this.isTablet = true;
      this.isMobile = false;
      return [this.isDesktop, this.isTablet, this.isMobile];
    }
    if (screenWidth > 319) {
      this.isDesktop = false;
      this.isTablet = false;
      this.isMobile = true;
      return [this.isDesktop, this.isTablet, this.isMobile];
    }
  }

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
    position:fixed;
    left:0;
    top:0;
    height:100vh;
    width:100vw;
    background:#212121;
    opacity:0.5;
    z-index: 99;
  }

  &__container {
    //display: flex;
  }

  @media (max-width: 2720px) and (min-width: 1441px) {
    &__container {
      //justify-content: center;
    }
  }

  @media (max-width: 1441px) and (min-width: 1281px) {
    &__container {
      //display: block;
      //justify-content: center;
    }
  }

  @media (max-width: 1300px) and (min-width: 320px) {
    &__container {
      display: flex;
      justify-content: center;
    }
  }

  //@media (max-width: 768px) and (min-width: 376px) {
  //  &__container {
  //    margin-top: 111px;
  //    margin-left: 15px;
  //  }
  //}

  &__content {
    //display: flex;
    //padding: 221px 0 0 157px;
    //justify-content: center;
    //padding: 221px 0 246px 157px;
  }

  @media (max-width: 2720px) and (min-width: 1439px) {
    &__content {
      display: flex;
      padding: 221px 0 0 157px;
      justify-content: center;
    }
  }

  @media (max-width: 1439px) and (min-width: 1301px) {
    &__content {
      //display: flex;
      padding: 221px 0 0 157px;
      //justify-content: center;
    }
  }

  @media (max-width: 1300px) and (min-width: 320px) {
    &__content {
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }
  }

  //@media (max-width: 768px) and (min-width: 376px) {
  //  &__content {
  //    margin-top: 111px;
  //    margin-left: 15px;
  //  }
  //}

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

  @media (max-width: 767px) and (min-width: 320px) {
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

  @media (max-width: 767px) and (min-width: 320px) {
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

  @media (max-width: 767px) and (min-width: 320px) {
    &__text {
      width: 322px;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 42px;
    }
  }

  &__poster {

  }

  @media (max-width: 2720px) and (min-width: 1438px) {
    &__poster {
      margin-top: -170px;
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

  @media (max-width: 1301px) and (min-width: 768px) {
    &__poster {
      margin-top: 170px;
      margin-left: 15px;
    }
  }

  @media (max-width: 768px) {
    &__poster {
      margin-top: 102px;
      margin-left: 0;
    }
  }
}
</style>
