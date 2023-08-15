import EvolutionDetailsViewModel from "@/view-models/evolution-details-view-model";
import SpeciesInfo from "../species/species-info";
import EvolutionDetails from "./evolution-details";
import EvolvesTo from "./evolves-to";

export default class EvolutionChain {
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