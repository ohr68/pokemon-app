import LinkDetails from "../link-details";
import SpeciesDetails from "./species-details";

export default class Gender {
    id: number
    name: string
    pokemonSpeciesDetails: Array<SpeciesDetails>
    requiredForEvolution: Array<LinkDetails>

    constructor(id: number,
        name: string,
        pokemonSpeciesDetails: Array<SpeciesDetails>,
        requiredForEvolution: Array<LinkDetails>) {
        this.id = id;
        this.name = name;
        this.pokemonSpeciesDetails = pokemonSpeciesDetails;
        this.requiredForEvolution = requiredForEvolution;
    }
}