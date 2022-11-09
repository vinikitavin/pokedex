<template>
  <div class="poke-type">
    <div class="poke-type__types">
      <div class="poke-type__type">
        <input
          id="fire"
          :value="value"
          class="poke-type__input"
          type="checkbox"
          @input="$emit('input', 'fire')"
        >
        <label for="fire">Fire</label>
      </div>
      <div class="poke-type__type">
        <input
          id="normal"
          :value="value"
          type="checkbox"
          class="poke-type__input"
          @input="$emit('input', 'normal')"
        >
        <label for="normal">Normal</label>
      </div>
      <div class="poke-type__type">
        <input
          id="electric"
          :value="value"
          type="checkbox"
          class="poke-type__input"
          @input="$emit('input', 'electric')"
        >
        <label for="electric">Electric</label>
      </div>
      <div class="poke-type__type">
        <input
          id="water"
          :value="value"
          type="checkbox"
          class="poke-type__input"
          @input="$emit('input', 'water')"
        >
        <label for="water">Water</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'PokeTypes'
})
export default class PokeTypes extends Vue {
  @Prop({ required: false }) readonly value!: Array<string>

  // type(): void {
  //   this.$emit('type', this.value);
  // }
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
