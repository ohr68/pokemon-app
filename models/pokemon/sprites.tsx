import BaseSprites from "./base-sprites"
import OtherSprites from "./other-sprites"

export default class Sprites extends BaseSprites {
    other: OtherSprites

    constructor(backDefault: string,
        backFemale: string | null,
        backShiny: string | null,
        backShinyFemale: string | null,
        frontDefault: string,
        frontFemale: string | null,
        frontShiny: string | null,
        frontShinyFemale: string | null,
        other: OtherSprites) {
       
        super(frontDefault,
            frontFemale,
            backDefault,
            backFemale,
            frontShiny,
            frontShinyFemale,
            backShinyFemale,
            backShiny)
            
        this.other = other;
    }
}