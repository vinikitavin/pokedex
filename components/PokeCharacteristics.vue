<template>
  <div class="poke-charact">
    <img alt="close-icon" class="poke-charact__close-icon" src="@/assets/img/close-icon.svg" @click="closeCharacCard">
    <div :style="{ background: pokeCharactBackground }" class="poke-charact__content">
      <div class="poke-charact__img-types">
        <div class="poke-charact__img-wrapper">
          <img :src="cardItem.img" class="poke-charact__img">
        </div>
        <div class="poke-charact__types">
          <NavButton :card-item="cardItem" button-text="" />
        </div>
      </div>
      <div class="poke-charact__data">
        <div class="poke-charact__name-gen-id">
          <div class="poke-charact__name">
            {{ pokeName }}
          </div>
          <div class="poke-charact__gen-id">
            <div class="poke-charact__gen">
              Generation 1
            </div>
            <div class="poke-charact__id">
              {{ cardItem.id }}
            </div>
          </div>
        </div>
        <div class="poke-charact__abilities">
          <div class="poke-charact__abilities-wrapper">
            <div class="poke-charact__abilities-head">
              Abilities
            </div>
            <div class="poke-charact__abilities-names">
              {{ cardItem.abilities[0] }}
            </div>
          </div>
        </div>
        <div class="poke-charact__hp-speed">
          <div class="poke-charact__hp">
            {{ cardItem.stats.hp }}
          </div>
          <div class="poke-charact__speed">
            {{ cardItem.stats.speed }}
          </div>
        </div>
        <div class="poke-charact__stats">
          <div class="poke-charact__defense-wrapper">
            <div class="poke-charact__defense-data">
              {{ cardItem.stats.defense }}
            </div>
            <h6>Defense</h6>
          </div>
          <div class="poke-charact__attack-wrapper">
            <div class="poke-charact__attack-data">
              {{ cardItem.stats.attack }}
            </div>
            <h6>Attack</h6>
          </div>
          <div class="poke-charact__sp-attack-wrapper">
            <div class="poke-charact__sp-attack-data">
              {{ cardItem.stats.special_attack }}
            </div>
            <h6>Sp Attack</h6>
          </div>
          <div class="poke-charact__sp-defense-wrapper">
            <div class="poke-charact__sp-defense-data">
              {{ cardItem.stats.special_defense }}
            </div>
            <h6>Sp Defense</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IPoke } from '@/types/pokemons';

@Component({
  name: 'PokeCharacteristics'
})
export default class PokeCharacteristics extends Vue {
  pokeCharactBackground: string = ''
  pokeName: string = ''

  @Prop({ required: true }) readonly cardItem!: IPoke

  setColorToCharactPokeCard(): void {
    if (this.cardItem.type_1 === 'fire') {
      this.pokeCharactBackground = 'linear-gradient(180deg, #732119 42.19%, #D93E30 100%)';
    }
    if (this.cardItem.type_1 === 'grass') {
      this.pokeCharactBackground = 'linear-gradient(45deg, rgb(33, 118, 0) 50%, rgb(115, 8, 221))';
    }
    if (this.cardItem.type_1 === 'water') {
      this.pokeCharactBackground = 'linear-gradient(45deg, #30cfd0, #330867)';
    }
    if (this.cardItem.type_1 === 'bug') {
      this.pokeCharactBackground = 'linear-gradient(45deg, rgb(33, 118, 0) 50%, rgb(115, 8, 221))';
    }
    if (this.cardItem.type_1 === 'normal') {
      this.pokeCharactBackground = 'linear-gradient(45deg, #6a85b6, #bac8e0)';
    }
    if (this.cardItem.type_1 === 'poison') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #b599d6,#b599d6,#c4ade6)';
    }
    if (this.cardItem.type_1 === 'electric') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #ffec70,#ffdd00,#ffdd00)';
    }
    if (this.cardItem.type_1 === 'ground') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #c2a886,#917e64,#755b38)';
    }
    if (this.cardItem.type_1 === 'fairy') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #f59ec2,#e26ea5,#ce3c87)';
    }
    if (this.cardItem.type_1 === 'psychic') {
      this.pokeCharactBackground = 'linear-gradient(45deg, #6224e4,#b300cc,#e100b2,#ff189a)';
    }
    if (this.cardItem.type_1 === 'fighting') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #f16205,#d98d00)';
    }
    if (this.cardItem.type_1 === 'rock') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #682e46,#b6715b,#e0ca80)';
    }
    if (this.cardItem.type_1 === 'ghost') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #269ef1,#7036be)';
    }
    if (this.cardItem.type_1 === 'ice') {
      this.pokeCharactBackground = 'linear-gradient(0deg, #3561e8,#4a7ef2,#558df6)';
    }
    if (this.cardItem.type_1 === 'dragon') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #bb256c,#e44429,#ca335d)';
    }
    if (this.cardItem.type_1 === 'dark') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #454545,#212121)';
    }
    if (this.cardItem.type_1 === 'steel') {
      this.pokeCharactBackground = 'linear-gradient(90deg, #567599,#1f2e4b)';
    }
  }

  closeCharacCard(): void {

  }

  shadowOfBodyAndStopScrolling(): void {
    const bodyScrollHidden: HTMLElement | null = document.querySelector('body');
    const shadowOfTheMain: HTMLElement | null = document.getElementById('shadow-of-body');
    shadowOfTheMain!.style.display = 'block';
    bodyScrollHidden!.style.overflow = 'hidden';
  }

  mounted(): void {
    this.shadowOfBodyAndStopScrolling();
    this.setColorToCharactPokeCard();
    const firstLetterToUpperCase: string = this.cardItem.name.split('')[0].toUpperCase();
    const restPartOfTheWord: string = this.cardItem.name.slice(1);
    this.pokeName = firstLetterToUpperCase + restPartOfTheWord;
  }
}
</script>

<style lang="scss" scoped>
.poke-charact {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -420px;
  margin-top: -200px;
  display: block;
  z-index: 100;

  &__close-icon {
    position: absolute;
    right: 0;
    top: -50px;
    cursor: pointer;
  }

  &__content {
    display: flex;
    width: 800px;
    height: 371px;
    padding: 29px 20px 25px 0;
    border-radius: 16px;
  }

  &__img-types {
    height: 317px;
    width: 364px;
  }

  &__img-wrapper {
    position: relative;
    height: 371px;
    width: 364px;
  }

  &__types {
    display: flex;
    align-items: end;
    position: relative;
    margin-left: 215px;
    margin-top: -60px;
    z-index: 100;
  }

  &__img {
    height: 317px;
    width: 364px;
  }

  &__data {
    width: 100%;
  }

  &__name-gen-id {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 25px;
  }

  &__gen {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin-right: 8px;
    color: $white-light;
  }

  &__id {
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 43px;
    text-align: center;
    color: $black;
    height: 41px;
    width: 41px;
    border-radius: 50%;
    background: $yellow-btn;
    margin-top: -15px;
  }

  &__name {
    font-family: 'Karla-Bold', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: $white-light;
  }

  &__gen-id {
    display: flex;
  }

  &__abilities {
    height: 60px;
    width: 264px;
    border-radius: 8px;
    background: $white-light;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin-bottom: 21px;
  }

  &__abilities-wrapper {
    padding: 12px 0 10px 28px;
  }

  &__abilities-head {
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $black;
  }

  &__hp-speed {
    height: 78px;
    width: 401px;
    border-radius: 8px;
    background: $white-light;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin-bottom: 21px;
  }

  &__stats {
    display: flex;
  }

  &__defense-wrapper,
  &__attack-wrapper,
  &__sp-attack-wrapper,
  &__sp-defense-wrapper {
    display: grid;
    height: 70px;
    width: 82px;
    border-radius: 8px;
    background: $white-light;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin-right: 23.5px;
    align-items: center;
    justify-content: center;
  }

  &__sp-defense-wrapper {
    margin-right: 0;
  }

  &__defense-data {
    margin-left: 4px;
  }

  &__sp-attack-data {
    margin-left: 7px;
  }

  &__sp-defense-data {
    margin-left: 11px;
  }

  &__defense-data,
  &__attack-data,
  &__sp-attack-data,
  &__sp-defense-data {
    font-family: 'Karla-Regular', sans-serif;
    font-size: 15px;
    line-height: 30px;
    color: $dark;
    height: 36px;
    width: 38px;
    border: 3px solid $dark;
    border-radius: 50%;
    text-align: center;
    margin-top: 10px;
  }
}

.type2 {
  margin-left: 250px;
}
</style>
