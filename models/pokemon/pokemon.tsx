import TypeSlot from "./type-slot";
import Sprites from "./sprites";

export default class Pokemon {
    id: number
    name: string
    order: number
    weight: number
    abilities: Array<any>
    baseExperience: number
    forms: Array<any>
    gameIndices: Array<any>
    height: number
    heldItems: Array<any>
    isDefault: boolean
    locationAreaEncounters: string
    moves: Array<any>
    pastTypes: Array<any>
    species: Array<any>
    sprites: Sprites
    stats: Array<any>
    types: Array<TypeSlot>

    constructor(id: number,
        name: string,
        order: number,
        weight: number,
        abilities: Array<any>,
        baseExperience: number,
        forms: Array<any>,
        gameIndices: Array<any>,
        height: number,
        heldItems: Array<any>,
        isDefault: boolean,
        locationAreaEncounters: string,
        moves: Array<any>,
        pastTypes: Array<any>,
        species: Array<any>,
        sprites: any,
        stats: Array<any>,
        types: Array<any>) {
            this.id = id;
            this.name = name;
            this.order = order;
            this.weight = weight;
            this.abilities = abilities;
            this.baseExperience = baseExperience,
            this.forms = forms;
            this.gameIndices = gameIndices;
            this.height = height;
            this.heldItems = heldItems;
            this.isDefault = isDefault;
            this.locationAreaEncounters = locationAreaEncounters;
            this.moves = moves;
            this.pastTypes = pastTypes;
            this.species = species;
            this.sprites = sprites;
            this.stats = stats;
            this.types = types;
    }
}