export interface IPoke {
  readonly 'id': 1,
  readonly 'name': 'bulbasaur',
  readonly 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  readonly 'stats': {
    readonly 'hp': 45,
    readonly 'attack': 49,
    readonly 'defense': 49,
    readonly 'special_attack': 65,
    readonly 'special_defense': 65,
    readonly 'speed': 45,
  },
  readonly 'type_1': 'grass',
  readonly 'type_2': 'poison' | undefined

}

export interface IItem {
  readonly 'name': 'bulbasaur',
  readonly 'url': 'https://pokeapi.co/api/v2/pokemon/1/',
}
