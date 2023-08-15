import LinkDetails from "../link-details";
import SpeciesInfo from "../species/species-info";
import EvolutionDetails from "./evolution-details";

export default class EvolvesTo {
    evolutionDetails: Array<EvolutionDetails>
    evolvesTo: Array<EvolvesTo>
    isBaby: boolean
    species: SpeciesInfo

    constructor(evolutionDetails: Array<EvolutionDetails>,
        evolvesTo: Array<EvolvesTo>,
        isBaby: boolean,
        species: SpeciesInfo) {
            this.evolutionDetails = evolutionDetails;
            this.evolvesTo = evolvesTo;
            this.isBaby = isBaby;
            this.species = species;
    }
}