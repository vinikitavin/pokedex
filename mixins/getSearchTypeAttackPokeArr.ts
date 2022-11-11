// import { Component, Vue, Watch } from 'vue-property-decorator';
// import axios from 'axios';
// import { IItem, IPoke } from '~/types/pokemons';
//
// @Component
// export class getSearchTypeAttackPokeArr extends Vue {
//   fullPokeArr: Array<IPoke> = []
//   searchedPokeArr: Array<IPoke> = []
//   searchValue: string = ''
//   typedPokeArr: Array<IPoke> = []
//   typeValue: Array<string> = []
//   attackPokeArr: Array<IPoke> = []
//
//   async getFullPokeArr(): Promise<void> {
//     try {
//       const getPokeLink = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=648&offset=0');
//       const pokeResponse = await Promise.all(
//         getPokeLink.data.results.map((item: IItem) => axios.get(item.url))
//       );
//       const pokemons: IPoke[] = pokeResponse.map((url: any) => ({
//         id: url.data.id,
//         name: url.data.name,
//         img: url.data.sprites.other.dream_world.front_default,
//         stats: {
//           hp: { ...url.data.stats }[0].base_stat,
//           attack: { ...url.data.stats }[1].base_stat,
//           defense: { ...url.data.stats }[2].base_stat,
//           special_attack: { ...url.data.stats }[3].base_stat,
//           special_defense: { ...url.data.stats }[4].base_stat,
//           speed: { ...url.data.stats }[5].base_stat
//         },
//         type_1: { ...url.data.types }[0].type.name,
//         type_2: { ...url.data.types }[1]
//       }));
//       this.fullPokeArr = pokemons;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//
//   get getSearchedPokeArr(): Array<object> {
//     if (this.searchValue.trim().length) {
//       return this.fullPokeArr.filter((poke: any) => poke.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()));
//     }
//     return [];
//   }
//
//   @Watch('searchValue')
// }
