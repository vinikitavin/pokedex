<template>
  <div class="poke-card">
    <div class="poke-card__prop prop">
      <h3 class="prop__name">
        {{ pokeName }}
      </h3>
      <div class="prop__characteristics">
        <div class="prop__attack">
          {{ pokemon.stats.attack }}
        </div>
        <div class="prop__defense">
          {{ pokemon.stats.defense }}
        </div>
      </div>
      <div class="prop__types">
        <NavButton class="prop__type-one" :pokemon="pokemon" button-text="" />
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
  pokeName: string = ''
  isImgNotFound: boolean = false

  @Prop({ required: true }) readonly pokemon!: IPoke

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

  &__prop {
    padding: 12px 0 12px 26px;
  }

  .prop {
    &__name {
      margin-bottom: 19px;
    }

    &__characteristics {
      display: flex;
      margin-bottom: 10px;
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
</style>
