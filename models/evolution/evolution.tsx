import EvolutionChain from "./evolution-chain";

export default class Evolution {
    id: number
    babyTriggerItem: any | null
    chain: EvolutionChain

    constructor(id: number,
        babyTriggerItem: any | null,
        chain: EvolutionChain) {
        this.id = id;
        this.babyTriggerItem = babyTriggerItem;
        this.chain = chain;
    }
}