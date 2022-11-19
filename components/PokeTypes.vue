<template>
  <div>
    <form v-if="isDesktop || isTablet">
      <div class="poke-types">
        <div class="poke-types__select-box" @click="showCheckboxes()">
          <select>
            <option>Tipo</option>
          </select>
          <div class="poke-types__over-select" />
        </div>
        <div class="poke-types__checkboxes types" :style="{ display: display }">
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                value="fire"
                type="checkbox"
              >
              <span>Fire</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                value="normal"
                type="checkbox"
              >
              <span>Normal</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                value="electric"
                type="checkbox"
              >
              <span>Electric</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                value="water"
                type="checkbox"
              >
              <span>Water</span>
            </label>
          </div>
        </div>
      </div>
    </form>
    <form v-else>
      <div class="types__filter-items">
        <div class="types__first-row">
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="fire"
              >
              <span>Fire</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="normal"
              >
              <span>Normal</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="electric"
              >
              <span>Electric</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
        </div>
        <div class="types__secons-row">
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="fire"
              >
              <span>Fire</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="normal"
              >
              <span>Normal</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="electric"
              >
              <span>Electric</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
        </div>
        <div class="types__third-row">
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="fire"
              >
              <span>Fire</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="normal"
              >
              <span>Normal</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="electric"
              >
              <span>Electric</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
          <div class="types__item">
            <label class="types__custom-checkbox">
              <input
                v-model="typeValue"
                type="checkbox"
                value="water"
              >
              <span>Water</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { ResizeMixin } from '@/mixins/resize';
import { getModule } from 'vuex-module-decorators';
import SetTypeValue from '@/store/setTypeValue';

@Component({
  name: 'PokeTypes'
})
export default class PokeTypes extends Mixins(ResizeMixin) {
  typeValue: Array<string> = []
  expanded = true
  display: string = 'none'

  @Watch('typeValue')

  changeValueByStore(): void {
    const storeTypeValue = getModule(SetTypeValue);
    storeTypeValue.changeTypeValue(this.typeValue);
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
</script >

<style lang="scss" scoped>
.poke-types {
  width: 135px;

  &__select-box {
    position: relative;
    display: inline-block;
    width: 135px;
    height: 21px;
    border-radius: 8px;
    background: $white;
  }

  &__select-box:after {
    content: "";
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    right: -120px;
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
    padding-right: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &__over-select {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &__checkboxes {
    position: absolute;
    width: 135px;
    height: 131px;
    border-radius: 8px;
    background: $white;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    margin-top: 8px;
    padding: 14px 14px 13px 30px;
    z-index: 999;
  }
}

.types {

  &__item {
    width: 100%;
    margin-bottom: 8px;
  }

  &__custom-checkbox > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__custom-checkbox > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &__custom-checkbox > span::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $dark;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &__custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: $danger;
  }

  &__custom-checkbox > input:checked + span::before {
    border-color: $dark;
    background-color: $danger;
  }

  &__filter-items {
    display: flex;
    justify-content: space-between;
  }
}

  option,
  label {
    display: flex;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: $black;
  }

  input {
    margin-right: 9px;
  }

  select {
    display: inline-block;
    padding-left: 25px;
  }
</style>
