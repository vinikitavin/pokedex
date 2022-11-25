<template>
  <div class="error-page">
    <p class="error-page__number">
      404
    </p>
    <div class="error-page__img" />
    <div class="error-page__message">
      <div class="error-page__left-hand-message">
        The rocket team
      </div>
      <div class="error-page__right-hand-message">
        has won this time.
      </div>
    </div>
    <NuxtLink class="error-page__button" to="/home">
      <NavButton button-text="Return" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';

@Component({
  name: 'ErrorPage',
  components: {
    NavButton
  }
})
export default class ErrorPage extends Vue {}
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 1024px;
  background: $danger;
  align-items: center;

  &__number {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -637.5px;
    font-family: 'Karla-Bold', sans-serif;
    font-weight: 700;
    font-size: 700px;
    line-height: 818px;
    color: $error-numbers;
  }

  @media (max-width: 1300px) and (min-width: 750px) {
    &__number {
      top: 160px;
      margin-left: -366px;
      font-size: 402px;
      line-height: 470px;
    }
  }

  @media (max-width: 750px) and (min-width: 375px) {
    &__number {
      top: 170px;
      margin-left: -182px;
      font-size: 200px;
      line-height: 233px;
    }
  }

  &__img {
    position: relative;
    width: 690px;
    height: 623px;
    background: url("@/assets/img/error-img.svg");
    margin-top: 120px;
    justify-content: center;
    z-index: 1;
  }

  @media (max-width: 1300px) and (min-width: 750px) {
    &__img {
      width: 492px;
      height: 444px;
      margin-top: 182px;
      background: url("@/assets/img/error-img.svg") center no-repeat;
      background-size: 492px 444px;
    }
  }

  @media (max-width: 750px) and (min-width: 375px) {
    &__img {
      width: 262px;
      height: 236px;
      margin-top: 188px;
      background: url("@/assets/img/error-img.svg") center no-repeat;
      background-size: 262px 236px;
    }
  }

  &__message {
    display: flex;
    justify-content: center;
    margin-top: 2px;
  }

  @media (max-width: 1300px) and (min-width: 750px) {
    &__message {
      display: block;
      text-align: center;
      margin-top: 16px;
    }
  }

  @media (max-width: 750px) and (min-width: 375px) {
    &__message {
      display: block;
      text-align: center;
      margin-top: 26px;
    }
  }

  &__left-hand-message,
  &__right-hand-message {
    font-family: 'Karla-Bold', sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: 1300px) and (min-width: 750px) {
    &__left-hand-message,
    &__right-hand-message {
      font-size: 45px;
      line-height: 52px;
    }
  }

  @media (max-width: 750px) and (min-width: 375px) {
    &__left-hand-message,
    &__right-hand-message {
      font-size: 25px;
      line-height: 29px;
    }
  }

  &__left-hand-message {
    color: $white;
    margin-right: 21px;
  }

  &__right-hand-message {
    color: $black;
  }

  &__button {
    display: flex;
    justify-content: center;
    margin-top: 62px;
  }

  @media (max-width: 1300px) and (min-width: 750px) {
    &__button {
      margin-top: 40px;
    }
  }

  @media (max-width: 750px) and (min-width: 375px) {
    &__button {
      margin-top: 75px;
    }
  }
}
</style>
