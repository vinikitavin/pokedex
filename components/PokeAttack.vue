<template>
  <form v-if="screenWidth > 650" id="attack-form">
    <div class="poke-attack">
      <div class="poke-attack__select-box" @click="openCheckboxes()">
        <select>
          <option>Ataque</option>
        </select>
        <div class="poke-attack__over-select" />
      </div>
      <div :style="{ display: display }" class="poke-attack__content">
        <div class="poke-attack__input-box input-box">
          <div class="input-box__item">
            <label>
              <span class="input-box__header">From</span>
              <input
                v-model.number="minAttack"
                class="input-box__input"
                placeholder="5"
                type="number"
              >
            </label>
          </div>
          <div class="input-box__item">
            <div class="input-box__between" />
          </div>
          <div class="input-box__item">
            <label>
              <span class="input-box__header">To</span>
              <input
                v-model.number="maxAttack"
                class="input-box__input"
                placeholder="165"
                type="number"
              >
            </label>
          </div>
        </div>
        <div class="poke-attack__apply">
          <button class="poke-attack__button" type="button" @click="getAttackPokeArr">
            Apply
          </button>
        </div>
      </div>
    </div>
  </form>
  <form v-else>
    <div class="poke-attack">
      <div class="poke-attack__content">
        <div class="poke-attack__input-box input-box">
          <div class="input-box__item">
            <label>
              <span class="input-box__header">From</span>
              <input
                v-model.number="minAttack"
                class="input-box__input"
                placeholder="5"
                type="number"
              >
            </label>
          </div>
          <div class="input-box__item">
            <div class="input-box__between" />
          </div>
          <div class="input-box__item">
            <label>
              <span class="input-box__header">To</span>
              <input
                v-model.number="maxAttack"
                class="input-box__input"
                placeholder="165"
                type="number"
              >
            </label>
          </div>
        </div>
        <div class="poke-attack__apply">
          <button class="poke-attack__button" type="button" @click="getAttackPokeArr">
            Apply
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { resizeMixin } from '@/mixins/resize';
import { getModule } from 'vuex-module-decorators';
import SetAttackArray from '@/store/setAttackArray';
import { transitions } from '~/mixins/transitions';

@Component({
  name: 'PokeAttack'
})
export default class PokeAttack extends Mixins(resizeMixin, transitions) {
  minAttack: number = 5
  maxAttack: number = 165
  attackPokeArr: Array<any> = []
  expanded = false
  display: string = 'block'

  @Prop({ required: false }) readonly fullPokeArr!: Array<object>

  getAttackPokeArr(): void {
    const storeMinMaxAttackArr = getModule(SetAttackArray);
    this.attackPokeArr = this.fullPokeArr.filter((pokemon: any) => pokemon.stats.attack >=
      this.minAttack &&
      pokemon.stats.attack <=
      this.maxAttack);
    if (this.screenWidth > 650) {
      this.hideCheckboxes();
    } else {
      this.closeFilterMenu();
    }

    storeMinMaxAttackArr.changeMinAttack(this.minAttack);
    storeMinMaxAttackArr.changeMaxAttack(this.maxAttack);
    storeMinMaxAttackArr.changeAttackArray(this.attackPokeArr);
  }

  showCheckboxes(): void {
    this.display = 'block';
    this.expanded = true;
  }

  hideCheckboxes(): void {
    this.display = 'none';
    this.expanded = false;
  }

  openCheckboxes(): void {
    this.expanded ? this.hideCheckboxes() : this.showCheckboxes();
  }

  mounted(): void {
    this.screenWidth <= 650 ? this.showCheckboxes() : this.hideCheckboxes();
  }
}
</script>

<style lang="scss" scoped>

select {
  display: inline-block;
  padding-left: 25px;
  padding-right: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

option {
  display: flex;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: $black;
}

.poke-attack {
  width: 285px;

  &__select-box {
    position: relative;
    display: inline-block;
    width: 285px;
    height: 21px;
    border-radius: 8px;
    background: $white;
  }

  &__select-box:after {
    content: "";
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    right: -269px;
    top: 10px;
    z-index: 1;
    text-align: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    box-sizing: border-box;
    background: url("@/assets/img/select-arrow.svg") no-repeat;
  }

  &__select-box select {
    width: 100%;
    height: 21px;
    border: 0 $white solid;
    border-radius: 8px;
    background: $white;
  }

  &__over-select {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &__content {
    position: absolute;
    width: 285px;
    border-radius: 8px;
    background: $white;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    margin-top: 8px;
    padding: 13px 23px 15px 12px;
    z-index: 10;
  }

  &__input-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__apply {
    display: flex;
    justify-content: end;
  }

  &__button {
    display: flex;
    border-radius: 11px;
    color: $dark;
    justify-content: center;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    width: 60px;
    height: 16px;
    background: $green-btn;
  }
}

.input-box {

  &__header {
    display: flex;
    font-family: 'Roboto-Regular', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: $black;
  }

  &__between {
    width: 16px;
    height: 1px;
    border-radius: 2px;
    background: $dark;
    margin-top: 27px;
  }

  &__input {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $dark;
    width: 96px;
    background: $light-grey;
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 16px;
    border: 0 solid $light-grey;
    padding-left: 13px;
  }
}
</style>
