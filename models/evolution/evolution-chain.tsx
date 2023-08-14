import LinkDetails from "../link-details";
import EvolutionDetails from "./evolution-details";
import EvolvesTo from "./evolves-to";

export default class EvolutionChain {
    evolutionDetails: Array<EvolutionDetails>
    evolvesTo: Array<EvolvesTo>
    isBaby: boolean
    species: LinkDetails

    constructor( evolutionDetails: Array<EvolutionDetails>,
        evolvesTo: Array<EvolvesTo>,
        isBaby: boolean,
        species: LinkDetails) {
            this.evolutionDetails = evolutionDetails;
            this.evolvesTo = evolvesTo;
            this.isBaby = isBaby;
            this.species = species;
        }
}