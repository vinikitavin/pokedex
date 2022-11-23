<template>
  <button v-if="isNav" class="button" :class="buttonTypes">
    {{ buttonText }}
  </button>
  <div v-else class="types">
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
import { resizeMixin } from '@/mixins/resize';
import { IPoke } from '@/types/pokemons';
import { transitions } from '@/mixins/transitions';
import { typeToButtonColor } from '@/utils/typesNameAndColor';
import { firstCursiveLetter } from '@/utils/firstCursiveLetter';

@Component
export default class NavButton extends Mixins(resizeMixin, transitions) {
  buttonTypes: { button__nav: boolean, button__type: boolean } = {
    button__nav: true,
    button__type: false
  }

  isNav: boolean = true
  typeOneColor: string | undefined = ''
  typeOneName: string = ''
  typeTwoColor: string | undefined = ''
  typeTwoDisplay: string = ''
  typeTwoName: string = ''

  @Prop({ required: true }) private readonly buttonText!: string
  @Prop({ required: false }) readonly pokemon!: IPoke
  @Prop({ required: false }) readonly cardItem!: IPoke

  mounted(): void {
    if (this.$route.path === '/pokedex') {
      this.setType();
      this.buttonTypes.button__nav = false;
      this.buttonTypes.button__type = true;
      this.isNav = false;
    }
  }

  setType(): void {
    const setTypeTwoColorsAndNames = (typeItem: IPoke): void => {
      if (typeof typeItem.type_2 !== 'undefined') {
        this.typeTwoColor = typeToButtonColor.get(typeItem.type_2.type.name);
        this.typeTwoName = firstCursiveLetter(typeItem.type_2.type.name);
      } else {
        this.typeTwoDisplay = 'none';
      }
    };

    if (typeof this.cardItem === 'undefined') {
      this.typeOneColor = typeToButtonColor.get(this.pokemon.type_1);
      this.typeOneName = firstCursiveLetter(this.pokemon.type_1);
      setTypeTwoColorsAndNames(this.pokemon);
    } else {
      this.typeOneColor = typeToButtonColor.get(this.cardItem.type_1);
      this.typeOneName = firstCursiveLetter(this.cardItem.type_1);
      setTypeTwoColorsAndNames(this.cardItem);
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

.types {
  display: flex;
}
</style>
