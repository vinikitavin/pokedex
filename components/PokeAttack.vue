<template>
  <form>
    <div class="poke-attack">
      <div class="poke-attack__select-box" @click="showCheckboxes()">
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
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'PokeAttack'
})
export default class PokeAttack extends Vue {
  minAttack: number = 5
  maxAttack: number = 165
  attackPokeArr: Array<any> = []
  expanded = true
  display: string = 'none'

  @Prop({ required: true }) readonly fullPokeArr!: Array<object>

  getAttackPokeArr(): void {
    this.attackPokeArr = this.fullPokeArr.filter((pokemon: any) => pokemon.stats.attack >=
      this.minAttack &&
      pokemon.stats.attack <=
      this.maxAttack);
  }

  @Watch('attackPokeArr')

  attack(): void {
    this.$emit('attack', {
      min: this.minAttack,
      max: this.maxAttack,
      arr: this.attackPokeArr
    });
  }

  showCheckboxes(): void {
    if (!this.expanded) {
      this.display = 'block';
      this.expanded = true;
    } else {
      this.display = 'none';
      this.expanded = false;
    }
  }
}
</script>

<style lang="scss" scoped>
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
    display: flex;
    position: absolute;
    width: 285px;
    //height: 105px;
    border-radius: 8px;
    background: $white;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    margin-top: 8px;
    padding: 13px 23px 15px 12px;
    z-index: 999;
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
    //align-items: end;
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

select {
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

select {
  display: inline-block;
  padding-left: 25px;
}
</style>
