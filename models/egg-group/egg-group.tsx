import LinkDetails from "../link-details";
import Name from "./name";

export default class EggGroup {
    id: number
    name: string
    names: Array<Name>
    pokemonSpecies: Array<LinkDetails>

    constructor(id: number,
        name: string,
        names: Array<Name>,
        pokemonSpecies: Array<LinkDetails>) {
        this.id = id;
        this.name = name;
        this.names = names;
        this.pokemonSpecies = pokemonSpecies;
    }
}