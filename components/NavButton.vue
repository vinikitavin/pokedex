<template>
  <button v-if="isNav" class="button" :class="buttonTypes">
    {{ buttonText }}
  </button>
  <div v-else class="button-types">
    <button :style="{ background: typeOneColor }" class="button" :class="buttonTypes">
      {{ typeOneName }}
    </button>
    <button :style="{ background: typeTwoColor, display: typeTwoDisplay }" class="button" :class="buttonTypes">
      {{ typeTwoName }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { ResizeMixin } from '~/mixins/resize';
import { IPoke } from '~/types/pokemons';

@Component
export default class NavButton extends Mixins(ResizeMixin) {
  buttonTypes: { button__nav: boolean, button__type: boolean } = {
    button__nav: true,
    button__type: false
  }

  isNav: boolean = true
  typeOneColor: string = ''
  typeOneName: string = ''
  typeTwoColor: string = ''
  typeTwoDisplay: string = ''
  typeTwoName: string = ''

  @Prop({ required: true }) private readonly buttonText!: string
  @Prop({ required: false }) readonly pokemon!: IPoke
  @Prop({ required: false }) readonly cardItem!: IPoke

  mounted(): void {
    if (this.$route.path === '/pokedex') {
      this.setTypes();
      this.buttonTypes.button__nav = false;
      this.buttonTypes.button__type = true;
      this.isNav = false;

      if (typeof this.cardItem === 'undefined') {
        const firstLetterToUpperCase: string = this.pokemon.type_1.split('')[0].toUpperCase();
        const restPartOfTheWord: string = this.pokemon.type_1.slice(1);
        this.typeOneName = firstLetterToUpperCase + restPartOfTheWord;
      } else {
        const firstLetterToUpperCase: string = this.cardItem.type_1.split('')[0].toUpperCase();
        const restPartOfTheWord: string = this.cardItem.type_1.slice(1);
        this.typeOneName = firstLetterToUpperCase + restPartOfTheWord;
      }
    }
  }

  setTypes(): void {
    if (typeof this.cardItem === 'undefined') {
      if (this.pokemon.type_1 === 'grass') {
        this.typeOneColor = '#73D677';
      } else if (this.pokemon.type_1 === 'poison') {
        this.typeOneColor = '#d3afdd';
      } else if (this.pokemon.type_1 === 'fire') {
        this.typeOneColor = '#fd7d24';
      } else if (this.pokemon.type_1 === 'flying') {
        this.typeOneColor = '#3dc7ef';
      } else if (this.pokemon.type_1 === 'water') {
        this.typeOneColor = '#4592c4';
      } else if (this.pokemon.type_1 === 'bug') {
        this.typeOneColor = '#729f3f';
      } else if (this.pokemon.type_1 === 'normal') {
        this.typeOneColor = '#a3abae';
      } else if (this.pokemon.type_1 === 'electric') {
        this.typeOneColor = '#eed535';
      } else if (this.pokemon.type_1 === 'ground') {
        this.typeOneColor = '#ab9842';
      } else if (this.pokemon.type_1 === 'fairy') {
        this.typeOneColor = '#fdb9e9';
      } else if (this.pokemon.type_1 === 'fighting') {
        this.typeOneColor = '#d56723';
      } else if (this.pokemon.type_1 === 'psychic') {
        this.typeOneColor = '#f366b9';
      } else if (this.pokemon.type_1 === 'rock') {
        this.typeOneColor = '#a38c21';
      } else if (this.pokemon.type_1 === 'steel') {
        this.typeOneColor = '#9eb7b8';
      } else if (this.pokemon.type_1 === 'ice') {
        this.typeOneColor = '#51c4e7';
      } else if (this.pokemon.type_1 === 'ghost') {
        this.typeOneColor = '#7b62a3';
      } else if (this.pokemon.type_1 === 'dragon') {
        this.typeOneColor = '#f16e57';
      } else if (this.pokemon.type_1 === 'dark') {
        this.typeOneColor = '#707070';
      }
      if (typeof this.pokemon.type_2 !== 'undefined') {
        if (this.pokemon.type_2.type.name === 'grass') {
          this.typeTwoColor = '#73D677';
          this.typeTwoName = 'Grass';
        } else if (this.pokemon.type_2.type.name === 'poison') {
          this.typeTwoColor = '#d3afdd';
          this.typeTwoName = 'Poison';
        } else if (this.pokemon.type_2.type.name === 'fire') {
          this.typeTwoColor = '#fd7d24';
          this.typeTwoName = 'Fire';
        } else if (this.pokemon.type_2.type.name === 'flying') {
          this.typeTwoColor = '#3dc7ef';
          this.typeTwoName = 'Flying';
        } else if (this.pokemon.type_2.type.name === 'water') {
          this.typeTwoColor = '#4592c4';
          this.typeTwoName = 'Water';
        } else if (this.pokemon.type_2.type.name === 'bug') {
          this.typeTwoColor = '#729f3f';
          this.typeTwoName = 'Bug';
        } else if (this.pokemon.type_2.type.name === 'normal') {
          this.typeTwoColor = '#a3abae';
          this.typeTwoName = 'Normal';
        } else if (this.pokemon.type_2.type.name === 'electric') {
          this.typeTwoColor = '#eed535';
          this.typeTwoName = 'Electric';
        } else if (this.pokemon.type_2.type.name === 'ground') {
          this.typeTwoColor = '#ab9842';
          this.typeTwoName = 'Ground';
        } else if (this.pokemon.type_2.type.name === 'fairy') {
          this.typeTwoColor = '#fdb9e9';
          this.typeTwoName = 'Fairy';
        } else if (this.pokemon.type_2.type.name === 'fighting') {
          this.typeTwoColor = '#d56723';
          this.typeTwoName = 'Fighting';
        } else if (this.pokemon.type_2.type.name === 'psychic') {
          this.typeTwoColor = '#f366b9';
          this.typeTwoName = 'Psychic';
        } else if (this.pokemon.type_2.type.name === 'rock') {
          this.typeTwoColor = '#a38c21';
          this.typeTwoName = 'Rock';
        } else if (this.pokemon.type_2.type.name === 'steel') {
          this.typeTwoColor = '#9eb7b8';
          this.typeTwoName = 'Steel';
        } else if (this.pokemon.type_2.type.name === 'ice') {
          this.typeTwoColor = '#51c4e7';
          this.typeTwoName = 'Ise';
        } else if (this.pokemon.type_2.type.name === 'ghost') {
          this.typeTwoColor = '#7b62a3';
          this.typeTwoName = 'Ghost';
        } else if (this.pokemon.type_2.type.name === 'dragon') {
          this.typeTwoColor = '#f16e57';
          this.typeTwoName = 'Dragon';
        } else if (this.pokemon.type_2.type.name === 'dark') {
          this.typeTwoColor = '#707070';
          this.typeTwoName = 'Dark';
        }
      } else {
        this.typeTwoDisplay = 'none';
      }
    }
    if (typeof this.cardItem !== 'undefined') {
      if (this.cardItem.type_1 === 'grass') {
        this.typeOneColor = '#73D677';
      } else if (this.cardItem.type_1 === 'poison') {
        this.typeOneColor = '#d3afdd';
      } else if (this.cardItem.type_1 === 'fire') {
        this.typeOneColor = '#fd7d24';
      } else if (this.cardItem.type_1 === 'flying') {
        this.typeOneColor = '#3dc7ef';
      } else if (this.cardItem.type_1 === 'water') {
        this.typeOneColor = '#4592c4';
      } else if (this.cardItem.type_1 === 'bug') {
        this.typeOneColor = '#729f3f';
      } else if (this.cardItem.type_1 === 'normal') {
        this.typeOneColor = '#a3abae';
      } else if (this.cardItem.type_1 === 'electric') {
        this.typeOneColor = '#eed535';
      } else if (this.cardItem.type_1 === 'ground') {
        this.typeOneColor = '#ab9842';
      } else if (this.cardItem.type_1 === 'fairy') {
        this.typeOneColor = '#fdb9e9';
      } else if (this.cardItem.type_1 === 'fighting') {
        this.typeOneColor = '#d56723';
      } else if (this.cardItem.type_1 === 'psychic') {
        this.typeOneColor = '#f366b9';
      } else if (this.cardItem.type_1 === 'rock') {
        this.typeOneColor = '#a38c21';
      } else if (this.cardItem.type_1 === 'steel') {
        this.typeOneColor = '#9eb7b8';
      } else if (this.cardItem.type_1 === 'ice') {
        this.typeOneColor = '#51c4e7';
      } else if (this.cardItem.type_1 === 'ghost') {
        this.typeOneColor = '#7b62a3';
      } else if (this.cardItem.type_1 === 'dragon') {
        this.typeOneColor = '#f16e57';
      } else if (this.cardItem.type_1 === 'dark') {
        this.typeOneColor = '#707070';
      }
      if (typeof this.cardItem.type_2 !== 'undefined') {
        if (this.cardItem.type_2.type.name === 'grass') {
          this.typeTwoColor = '#73D677';
          this.typeTwoName = 'Grass';
        } else if (this.cardItem.type_2.type.name === 'poison') {
          this.typeTwoColor = '#d3afdd';
          this.typeTwoName = 'Poison';
        } else if (this.cardItem.type_2.type.name === 'fire') {
          this.typeTwoColor = '#fd7d24';
          this.typeTwoName = 'Fire';
        } else if (this.cardItem.type_2.type.name === 'flying') {
          this.typeTwoColor = '#3dc7ef';
          this.typeTwoName = 'Flying';
        } else if (this.cardItem.type_2.type.name === 'water') {
          this.typeTwoColor = '#4592c4';
          this.typeTwoName = 'Water';
        } else if (this.cardItem.type_2.type.name === 'bug') {
          this.typeTwoColor = '#729f3f';
          this.typeTwoName = 'Bug';
        } else if (this.cardItem.type_2.type.name === 'normal') {
          this.typeTwoColor = '#a3abae';
          this.typeTwoName = 'Normal';
        } else if (this.cardItem.type_2.type.name === 'electric') {
          this.typeTwoColor = '#eed535';
          this.typeTwoName = 'Electric';
        } else if (this.cardItem.type_2.type.name === 'ground') {
          this.typeTwoColor = '#ab9842';
          this.typeTwoName = 'Ground';
        } else if (this.cardItem.type_2.type.name === 'fairy') {
          this.typeTwoColor = '#fdb9e9';
          this.typeTwoName = 'Fairy';
        } else if (this.cardItem.type_2.type.name === 'fighting') {
          this.typeTwoColor = '#d56723';
          this.typeTwoName = 'Fighting';
        } else if (this.cardItem.type_2.type.name === 'psychic') {
          this.typeTwoColor = '#f366b9';
          this.typeTwoName = 'Psychic';
        } else if (this.cardItem.type_2.type.name === 'rock') {
          this.typeTwoColor = '#a38c21';
          this.typeTwoName = 'Rock';
        } else if (this.cardItem.type_2.type.name === 'steel') {
          this.typeTwoColor = '#9eb7b8';
          this.typeTwoName = 'Steel';
        } else if (this.cardItem.type_2.type.name === 'ice') {
          this.typeTwoColor = '#51c4e7';
          this.typeTwoName = 'Ise';
        } else if (this.cardItem.type_2.type.name === 'ghost') {
          this.typeTwoColor = '#7b62a3';
          this.typeTwoName = 'Ghost';
        } else if (this.cardItem.type_2.type.name === 'dragon') {
          this.typeTwoColor = '#f16e57';
          this.typeTwoName = 'Dragon';
        } else if (this.cardItem.type_2.type.name === 'dark') {
          this.typeTwoColor = '#707070';
          this.typeTwoName = 'Dark';
        }
      } else {
        this.typeTwoDisplay = 'none';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  border-radius: 11px;
  color: $dark;
  align-items: start;
  justify-content: center;

  &__nav {
    font-family: 'Karla-Bold', sans-serif;
    font-size: 23px;
    width: 231px;
    height: 66px;
    line-height: 52px;
    background-color: $green-btn;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 767px) and (min-width: 375px) {
    &__nav {
      width: 313px;
      height: 55px;
    }
  }

  &__type {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    width: 60px;
    height: 16px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    margin-right: 13px;
  }
}

.button-types {
  display: flex;
}
</style>
