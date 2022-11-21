export interface IPoke {
  readonly 'abilities': {
    readonly name_1: {
      readonly ability: {
        readonly name: string,
        readonly url: string
      }
    },
    readonly name_2: {
      readonly ability: {
        readonly name: string,
        readonly url: string
      }
    },
    readonly name_3: {
      readonly ability: {
        readonly name: string,
        readonly url: string
      }
    }
  }
  readonly 'id': number,
  readonly 'name': string,
  readonly 'img': string,
  readonly 'stats': {
    readonly 'hp': number,
    readonly 'attack': number,
    readonly 'defense': number,
    readonly 'special_attack': number,
    readonly 'special_defense': number,
    readonly 'speed': number,
  },
  readonly 'type_1': string,
  readonly 'type_2': {
    'slot': number,
    'type': {
      'name': string,
      'url': string
    }
  }
}

export interface IItem {
  readonly 'name': 'bulbasaur',
  readonly 'url': 'https://pokeapi.co/api/v2/pokemon/1/',
}

export interface IUrl {
  data: {
    id: number,
    name: string,
    sprites: {
      other: {
        dream_world: {
          front_default: string
        }
      }
    },
    stats: [{
      base_stat: number
    }],
    types: [{
      slot: number,
      type: {
        name: string,
        url: string
      }},
      {
        slot: number,
        type: {
          name: string,
          url: string
        }}
    ]
  }
  status: 200
  statusText: string
  headers: Object
  config: Object
  request: XMLHttpRequest
}
