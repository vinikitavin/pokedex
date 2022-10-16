<template>
  <div class="router-page">
    <img src="@/assets/img/logo.svg" class="router-page__logo" alt="logo">
    <form action="../ui" target="_self" class="router-page__btn">
      <NavButton button-text="UI-KIT" />
    </form>
    <form action="../home" target="_self" class="router-page__btn">
      <NavButton button-text="Pokedex-Page" />
    </form>
  </div>
</template>

<script lang="ts">
import NavButton from '@/components/NavButton.vue';

export default {
  components: {
    NavButton
  }
};
</script>

<style scoped lang="scss">
.router-page {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 997px;
  grid-template-rows: 371px 80px 80px;
  justify-content: center;
  align-content: center;
  background-color: #F5DB13;
  &__btn {
    display: flex;
    justify-content: center;
  }
}
</style>
