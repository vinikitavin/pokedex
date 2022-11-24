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
          <div :style="{ fontSize: nameSize }" class="poke-charact__name">
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
            <div v-if="isSecondAbility && !isThirdAbility" class="poke-charact__abilities-names">
              {{ firstAbilityName }} - {{ secondAbilityName }}
            </div>
            <div v-if="isSecondAbility && isThirdAbility" class="poke-charact__abilities-names">
              {{ firstAbilityName }} - {{ secondAbilityName }} - {{ thirdAbilityName }}
            </div>
          </div>
        </div>
        <div class="poke-charact__hp-speed">
          <div class="poke-charact__hp">
            <p class="poke-charact__hp-head">
              Healthy Points
            </p>
            <p class="poke-charact__hp-name">
              {{ hpQuantity }}
            </p>
            <div class="poke-charact__hp-body">
              <transition name="hp">
                <div v-if="hpWidth" :style="{ width: `${hpWidth}px` }" class="poke-charact__hp-value" />
              </transition>
            </div>
          </div>
          <div class="poke-charact__speed">
            <p class="poke-charact__speed-head">
              Speed
            </p>
            <p class="poke-charact__speed-name">
              {{ speedQuantity }}
            </p>
            <div class="poke-charact__speed-body">
              <transition name="speed">
                <div v-if="speedWidth" :style="{ width: `${speedWidth}px` }" class="poke-charact__speed-value" />
              </transition>
            </div>
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
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { IPoke } from '@/types/pokemons';
import { transitions } from '~/mixins/transitions';
import { firstCursiveLetter } from '@/utils/firstCursiveLetter';
import { typeToPokeCardColor } from '@/utils/typesNameAndColor';

@Component({
  name: 'PokeCharacteristics'
})
export default class PokeCharacteristics extends Mixins(transitions) {
  pokeCharactBackground: string | undefined = ''
  pokeName: string = ''
  firstAbilityName: string = ''
  secondAbilityName: string = ''
  thirdAbilityName: string = ''

  isSecondAbility: boolean = false
  isThirdAbility: boolean = false

  hpWidth: string = ''
  speedWidth: string = ''

  hpQuantity: any = 0
  speedQuantity: any = 0

  nameSize: string = ''

  @Prop({ required: true }) readonly cardItem!: IPoke
  @Prop({ required: true }) readonly closeCharactCard!: Function

  setPokeNameFontSize(): void {
    if (this.screenWidth > 900) {
      this.cardItem.name.length >= 12 ? this.nameSize = '22px' : this.nameSize = '36px';
    }
    this.cardItem.name.length >= 12 ? this.nameSize = '16px' : this.nameSize = '24px';
  }

  setHpAndSpeedCounter(): void {
    window.setInterval(() => {
      if (this.hpQuantity !== this.cardItem.stats.hp) {
        this.hpQuantity += 1;
      }
      if (this.speedQuantity !== this.cardItem.stats.speed) {
        this.speedQuantity += 1;
      }
    }, 10);
  }

  setHpAndSpeedLine(): void {
    this.hpWidth = String(this.cardItem.stats.hp);
    this.speedWidth = String(this.cardItem.stats.speed);
  }

  setAbilities(): void {
    this.firstAbilityName = firstCursiveLetter(this.cardItem.abilities.name_1.ability.name);

    if (typeof this.cardItem.abilities.name_2 !== 'undefined') {
      this.secondAbilityName = firstCursiveLetter(this.cardItem.abilities.name_2.ability.name);
      this.isSecondAbility = true;
    } else {
      this.isSecondAbility = false;
    }
    if (typeof this.cardItem.abilities.name_3 !== 'undefined') {
      this.thirdAbilityName = firstCursiveLetter(this.cardItem.abilities.name_3.ability.name);
      this.isThirdAbility = true;
    } else {
      this.isThirdAbility = false;
    }
  }

  setColorToCharactPokeCard(): void {
    this.pokeCharactBackground = typeToPokeCardColor.get(this.cardItem.type_1);
  }

  closeCharacCard(): void {
    this.closeCharactCard();
  }

  mounted(): void {
    this.shadowOfBodyAndStopScrolling();
    this.setColorToCharactPokeCard();
    this.setAbilities();
    this.setHpAndSpeedLine();
    this.setHpAndSpeedCounter();
    this.setPokeNameFontSize();
    this.pokeName = firstCursiveLetter(this.cardItem.name);
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

  @media (max-width: 900px) and (min-width: 651px) {
    &__content {
      width: 669px;
      height: 311px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__content {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    }
  }

  &__img-types {
    width: 364px;
    height: 317px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__img-types {
      width: 305px;
      height: 311px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__img-types {
      display: none;
    }
  }

  &__img-wrapper {
    position: relative;
    width: 364px;
    height: 371px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__img-wrapper {
      width: 305px;
      height: 311px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__img-wrapper {
      display: none;
    }
  }

  &__types {
    display: flex;
    align-items: end;
    position: relative;
    margin-left: 215px;
    margin-top: -60px;
    z-index: 100;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__types {
      margin-left: 150px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__types {
      margin-left: 0;
    }
  }

  &__img {
    width: 364px;
    height: 317px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__img {
      width: 305px;
      height: 254px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__img {
      width: 1px;
      height: 1px;
    }
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

  @media (max-width: 900px) and (min-width: 651px) {
    &__name-gen-id {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__name-gen-id {
      margin-bottom: 0;
    }
  }

  &__gen {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin-right: 8px;
    color: $white-light;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__gen {
      font-size: 21px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__gen {
      font-size: 21px;
    }
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

  @media (max-width: 900px) and (min-width: 651px) {
    &__id {
      font-size: 14px;
    }
  }

  &__name {
    font-family: 'Karla-Bold', sans-serif;
    font-weight: 700;
    line-height: 42px;
    color: $white-light;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__name {
      line-height: 24px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__name {
      font-size: 36px;
    }
  }

  &__gen-id {
    display: flex;
  }

  &__abilities {
    max-width: 401px;
    height: 60px;
    border-radius: 8px;
    background: $white-light;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin-bottom: 21px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__abilities {
      max-width: 335px;
      margin-bottom: 17px;
      border-radius: 16px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__abilities {
      max-width: 10px;
      margin-bottom: 17px;
      border-radius: 16px;
    }
  }

  &__abilities-wrapper {
    padding: 12px 0 10px 28px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__abilities-wrapper {
      padding: 9px 0 5px 24px;
    }
  }

  &__abilities-head,
  &__abilities-names {
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $black;
  }

  &__hp-speed {
    display: flex;
    width: 401px;
    height: 78px;
    border-radius: 8px;
    background: $white-light;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin-bottom: 21px;
    padding: 20px 20px 8px 20px;
    justify-content: space-between;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__hp-speed {
      width: 335px;
      height: 65px;
      border-radius: 16px;
      margin-bottom: 18px;
      padding: 12px 16px 7px 16px;
    }
  }

  @media (max-width: 651px) and (min-width: 375px) {
    &__hp-speed {
      width: 10px;
      height: 10px;
      border-radius: 16px;
      margin-bottom: 18px;
      padding: 0;
    }
  }

  &__hp-head,
  &__speed-head {
    font-family: 'Karla-Regular', sans-serif;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__hp-head,
    &__speed-head {
      font-size: 14px;
    }
  }

  &__hp-name,
  &__speed-name {
    font-family: 'Karla-Regular', sans-serif;
    font-weight: 700;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__hp-name,
    &__speed-name {
      font-size: 13px;
    }
  }

  &__hp-body,
  &__speed-body {
    width: 167px;
    height: 5px;
    border-radius: 8px;
    background: $light-grey;
    overflow: hidden;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__hp-body,
    &__speed-body {
      width: 135px;
      height: 4px;
    }
  }

  &__hp-value,
  &__speed-value {
    height: 5px;
    border-radius: 8px;
  }

  &__hp-value {
    background: $green-btn;
  }

  &__speed-value {
    background: $yellow-btn;
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

  @media (max-width: 900px) and (min-width: 651px) {
    &__defense-wrapper,
    &__attack-wrapper,
    &__sp-attack-wrapper,
    &__sp-defense-wrapper {
      width: 69px;
      height: 59px;
      margin-right: 19px;
    }
  }

  &__sp-defense-wrapper {
    margin-right: 0;
  }

  &__defense-data {
    margin-left: 4px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__defense-data {
      margin-left: 7px;
    }
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__attack-data {
      margin-left: 3px;
    }
  }

  &__sp-attack-data {
    margin-left: 7px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__sp-attack-data {
      margin-left: 12px;
    }
  }

  &__sp-defense-data {
    margin-left: 11px;
  }

  @media (max-width: 900px) and (min-width: 651px) {
    &__sp-defense-data {
      margin-left: 16px;
    }
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

  @media (max-width: 900px) and (min-width: 651px) {
    &__defense-data,
    &__attack-data,
    &__sp-attack-data,
    &__sp-defense-data {
      font-size: 12px;
      line-height: 25px;
      width: 30px;
      height: 30px;
      margin-top: 7px;
    }
  }
}

@media (max-width: 900px) and (min-width: 651px) {
  .poke-charact {
    margin-left: -335px;
    margin-top: -130px;
  }
}

@media (max-width: 651px) and (min-width: 375px) {
  .poke-charact {
    margin: 0;
    display: block;
    top: 0;
    left: 0;
    z-index: 999;
  }
}

.type2 {
  margin-left: 250px;
}

.hp-enter-active, .hp-leave-active {
  transition: 1s ease-out;
}

.hp-enter, .hp-leave-to {
  transform: translateX(-100px);
}

.speed-enter-active, .speed-leave-active {
  transition: 1s ease-out;
}

.speed-enter, .speed-leave-to {
  transform: translateX(-100px);
}
</style>
