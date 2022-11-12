<template>
  <input
    v-model="searchValue"
    class="poke-search"
    placeholder="Encuentra tu pokémon..."
    @click="search"
  >
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'PokeSearch'
})
export default class PokeSearch extends Vue {
  searchValue: string = ''

  // @Prop({ required: true }) readonly fullPokeArr!: Array<object>
  //
  // get getSearchedPokeArr(): Array<object> {
  //   if (this.searchValue.trim().length) {
  //     return this.fullPokeArr.filter((poke: any) => poke.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()));
  //   }
  //   return [];
  // }

  @Watch('searchValue')

  search(): void {
    this.$emit('search', this.searchValue);
  }
}
</script>

<style lang="scss" scoped>
.poke-search {
  width: 1088px;
  height: 53px;
  background: $white;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;
  border: 1px solid $white;
  padding-left: 31px;
}

.poke-search::placeholder {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: $dark;
}
</style>
