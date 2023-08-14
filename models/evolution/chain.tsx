export default class Chain {
    evolutionDetails: Array<any>
    evolvesTo: Array<any>

    constructor(evolutionDetails: Array<any>,
        evolvesTo: Array<any>) {
            this.evolutionDetails = evolutionDetails;
            this.evolvesTo = evolvesTo;
    }
}