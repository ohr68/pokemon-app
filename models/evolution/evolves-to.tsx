import LinkDetails from "../link-details";
import EvolutionDetails from "./evolution-details";

export default class EvolvesTo {
    evolutionDetails: Array<EvolutionDetails>
    evolvesTo: Array<EvolvesTo>
    isBaby: boolean
    species: LinkDetails

    constructor(evolutionDetails: Array<EvolutionDetails>,
        evolvesTo: Array<EvolvesTo>,
        isBaby: boolean,
        species: LinkDetails) {
            this.evolutionDetails = evolutionDetails;
            this.evolvesTo = evolvesTo;
            this.isBaby = isBaby;
            this.species = species;
    }
}