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

  @Watch('searchValue')

  search(): void {
    this.$emit('search', this.searchValue);
  }
}
</script>

<style lang="scss" scoped>
.poke-search {
  width: 100%;
  height: 53px;
  background: $white;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;
  border: 1px solid $white;
  padding-left: 31px;
}

@media (max-width: 1300px) and (min-width: 750px) {
  .poke-search {
    height: 36px;
    //width: 723px;
  }
}

@media (max-width: 750px) and (min-width: 650px) {
  .poke-search {
    height: 31px;
    //width: 322px;
  }
}

@media (max-width: 650px) and (min-width: 375px) {
  .poke-search {
    height: 31px;
    width: 322px;
  }
}

.poke-search::placeholder {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: $dark;
}

@media (max-width: 800px) and (min-width: 375px) {
  .poke-search::placeholder {
    font-size: 12px;
  }
}
</style>
