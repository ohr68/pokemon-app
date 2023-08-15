import EvolutionChain from "@/models/evolution/evolution-chain"

export default class EvolutionDetailsViewModel {
    id: number
    name: string
    minLevelToEvolve: number | null
    imageUrl: string
    evolutionId: number
    evolutionName: string
    evolutionImageUrl: string

    constructor(id: number,
        name: string,
        minLevelToEvolve: number | null,
        imageUrl: string,
        evolutionId: number,
        evolutionName: string,
        evolutionImageUrl: string) {
        this.id = id;
        this.name = name;
        this.minLevelToEvolve = minLevelToEvolve;
        this.imageUrl = imageUrl;
        this.evolutionId = evolutionId;
        this.evolutionName = evolutionName;
        this.evolutionImageUrl = evolutionImageUrl;
    }
}