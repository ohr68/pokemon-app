import LinkDetails from "../link-details"
import Species from "./species";

export default class SpeciesDetails {
    rate: number
    pokemonSpecies: Species

    constructor(rate: number,
        pokemonSpecies: Species) {
        this.rate = rate;
        this.pokemonSpecies = pokemonSpecies;
    }
}