<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <h5 class="footer__item">
          Make with ❤️
        </h5>
        <a class="footer__item" href="https://github.com/vinikitavin" target="_blank">
          Ours Team
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TheFooter'
})

export default class TheFooter extends Vue {
}
</script>

<style lang="scss" scoped>
.footer {
  grid-area: 3 / 1 / 4 / 1;
  background-color: $transparent;

  &__container {
    padding: 33px 10% 33px 10.9%;
  }

  @media (max-width: 2720px) and (min-width: 1441px) {
    &__container {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 1280px) and (min-width: 768px) {
    &__container {
      padding: 33px 36px 36px 37px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    &__container {
      padding: 21px 36px 20px 37px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 2720px) and (min-width: 1441px) {
    &__content {
      width: 1140px;
    }
  }

  &__item {
    font-family: 'Karla-Bold', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: $dark;
  }
}
</style>
