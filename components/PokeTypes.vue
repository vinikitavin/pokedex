<template>
  <div class="poke-type">
    <div class="poke-type__types">
      <div class="poke-type__type">
        <input
          id="fire"
          v-model="typeValue"
          value="fire"
          class="poke-type__input"
          type="checkbox"
        >
        <label for="fire">Fire</label>
      </div>
      <div class="poke-type__type">
        <input
          id="normal"
          v-model="typeValue"
          value="normal"
          type="checkbox"
          class="poke-type__input"
        >
        <label for="normal">Normal</label>
      </div>
      <div class="poke-type__type">
        <input
          id="electric"
          v-model="typeValue"
          value="electric"
          type="checkbox"
          class="poke-type__input"
        >
        <label for="electric">Electric</label>
      </div>
      <div class="poke-type__type">
        <input
          id="water"
          v-model="typeValue"
          value="water"
          type="checkbox"
          class="poke-type__input"
        >
        <label for="water">Water</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'PokeTypes'
})
export default class PokeTypes extends Vue {
  typeValue: Array<string> = []

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
}
</script>

<style lang="scss" scoped>
.poke-type {
  width: 135px;
  height: 131px;
  border-radius: 8px;
  background: $white;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);

  &__types {
    padding: 14px 33px 13px 32px;
  }

  &__type {
    width: 100%;
  }

  &__input {
    color: $white;
  }
}
</style>
