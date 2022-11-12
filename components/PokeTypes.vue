<template>
  <form>
    <div class="multiselect">
      <div class="selectBox" @click="showCheckboxes()">
        <select>
          <option>Tipo</option>
        </select>
        <div class="overSelect" />
      </div>
      <div class="checkboxes" :style="{ display: display }">
        <div class="type">
          <label class="custom-checkbox">
            <input
              v-model="typeValue"
              value="fire"
              type="checkbox"
            >
            <span>Fire</span>
          </label>
        </div>
        <div class="type">
          <label class="custom-checkbox">
            <input
              v-model="typeValue"
              value="normal"
              type="checkbox"
            >
            <span>Normal</span>
          </label>
        </div>
        <div class="type">
          <label class="custom-checkbox">
            <input
              v-model="typeValue"
              value="electric"
              type="checkbox"
            >
            <span>Electric</span>
          </label>
        </div>
        <div class="type">
          <label class="custom-checkbox">
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
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'PokeTypes'
})
export default class PokeTypes extends Vue {
  typeValue: Array<string> = []
  expanded = true
  display: string = 'none'

  // @Prop({ required: true }) readonly fullPokeArr!: Array<object>
  //
  // get getTypedPokeArr(): Array<object> {
  //   if (this.typeValue.length) {
  //     return this.fullPokeArr.filter((item: IPoke) => {
  //       if (typeof item.type_2 !== 'undefined') {
  //         return this.typeValue.includes(item.type_1) && this.typeValue.includes(item.type_2.type.name);
  //       }
  //       return this.typeValue.includes(item.type_1);
  //     });
  //   }
  //   return [];
  // }

  @Watch('typeValue')

  type(): void {
    this.$emit('type', this.typeValue);
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
.multiselect {
  width: 135px;
}

.selectBox {
  position: relative;
  display: inline-block;
  width: 135px;
  height: 21px;
  border-radius: 8px;
  background: $white;
}

.selectBox:after {
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

.selectBox select {
  width: 100%;
  height: 21px;
  border: 0 $white solid;
  border-radius: 8px;
  background: $white;
}

select {
  padding-right: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.checkboxes {
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

.type {
  width: 100%;
  margin-bottom: 8px;
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

.custom-checkbox > input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox > span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox > span::before {
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

.custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
  border-color: $danger;
}

.custom-checkbox > input:checked + span::before {
  border-color: $dark;
  background-color: $danger;
}
</style>
