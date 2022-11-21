import axios from 'axios';
import { IItem, IPoke } from '~/types/pokemons';
import { Component, Vue } from 'vue-property-decorator';

@Component
export class getFullPokeArr extends Vue {
  fullPokeArr: Array<IPoke> = []

  async getFullPokeArr(): Promise<void> {
    try {
      const getPokeLink = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=648&offset=0');
      const pokeResponse = await Promise.all(
        getPokeLink.data.results.map((item: IItem) => axios.get(item.url))
      );
      const pokemons: IPoke[] = pokeResponse.map((url: any) => ({
        abilities: {
          name_1: url.data.abilities[0],
          name_2: url.data.abilities[1],
          name_3: url.data.abilities[2]
        },
        id: url.data.id,
        name: url.data.name,
        img: url.data.sprites.other.dream_world.front_default,
        stats: {
          hp: { ...url.data.stats }[0].base_stat,
          attack: { ...url.data.stats }[1].base_stat,
          defense: { ...url.data.stats }[2].base_stat,
          special_attack: { ...url.data.stats }[3].base_stat,
          special_defense: { ...url.data.stats }[4].base_stat,
          speed: { ...url.data.stats }[5].base_stat
        },
        type_1: { ...url.data.types }[0].type.name,
        type_2: { ...url.data.types }[1]
      }));
      this.fullPokeArr = pokemons;
    } catch (error) {
      console.log(error);
    }
  }
}
