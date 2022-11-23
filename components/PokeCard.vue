<template>
  <div class="poke-card" @click="cardClick">
    <div class="poke-card__prop prop">
      <h3 class="prop__name">
        {{ pokeName }}
      </h3>
      <div class="prop__characteristics">
        <div class="prop__attack">
          <div class="prop__attack-data">
            {{ pokemon.stats.attack }}
          </div>
          <h6 class="prop__attack-data-name">
            Attack
          </h6>
        </div>
        <div class="prop__defense">
          <div class="prop__defense-data">
            {{ pokemon.stats.defense }}
          </div>
          <h6 class="prop__defense-data-name">
            Defense
          </h6>
        </div>
      </div>
      <div class="prop__types">
        <NavButton :pokemon="pokemon" button-text="" />
      </div>
    </div>
    <img :src="pokemon.img" class="poke-card__img">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';
import { IPoke } from '~/types/pokemons';

@Component({
  name: 'PokeCard',
  components: {
    NavButton
  }
})
export default class PokeCard extends Vue {
  @Prop({ required: true }) readonly pokemon!: IPoke

  pokeName: string = ''

  cardClick(): void {
    this.$emit('cardClick', this.pokemon.id);
  }

  mounted(): void {
    const firstLetterToUpperCase: string = this.pokemon.name.split('')[0].toUpperCase();
    const restPartOfTheWord: string = this.pokemon.name.slice(1);
    this.pokeName = firstLetterToUpperCase + restPartOfTheWord;
  }
}

</script>

<style lang="scss" scoped>
.poke-card {
  position: relative;
  width: 352px;
  height: 137px;
  border-radius: 8px;
  background: $light-grey;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  cursor: pointer;

  &__prop {
    padding: 12px 0 0 26px;
  }

  @media (max-width: 800px) and (min-width: 375px) {
    &__prop {
      padding: 5px 0 0 26px;
    }
  }

  .prop {
    &__name {
      position: relative;
      margin-bottom: 19px;
      z-index: 9;
    }

    &__characteristics {
      display: flex;
      margin-bottom: 23px;
    }

    &__attack {
      margin-right: 14px;
    }

    &__attack,
    &__defense {
      font-family: 'Karla-Regular', sans-serif;
      font-size: 15px;
      line-height: 30px;
      color: $dark;
      height: 36px;
      width: 38px;
      border: 3px solid $dark;
      border-radius: 50%;
      text-align: center;
    }

    &__attack-data {
      margin-bottom: 6px;
    }

    &__attack-data-name,
    &__defense-data-name {
    color: $grey-text;
    }

    &__defense-data {
      margin-bottom: 6px;
    }

    &__types {
      display: flex;
    }
  }

  &__img {
    position: absolute;
    height: 137px;
    width: 232px;
    top: 0;
    right: 0;
  }
}

@media (max-width: 800px) and (min-width: 375px) {
  .poke-card {
    width: 337px;
    height: 140px;
  }
}
</style>
