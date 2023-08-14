export default class BaseSprites {
    frontDefault: string
    frontFemale: string | null
    backDefault: string
    backFemale: string | null
    frontShiny: string | null
    frontShinyFemale: string | null
    backShinyFemale: string | null
    backShiny: string | null

    constructor(frontDefault: string,
        frontFemale: string | null,
        backDefault: string,
        backFemale: string | null,
        frontShiny: string | null,
        frontShinyFemale: string | null,
        backShinyFemale: string | null,
        backShiny: string | null) {
        this.frontDefault = frontDefault;
        this.frontFemale = frontFemale;
        this.backDefault = backDefault;
        this.backFemale = backFemale;
        this.frontShiny = frontShiny;
        this.frontShinyFemale = frontShinyFemale;
        this.backShinyFemale = backShinyFemale;
        this.backShiny = backShiny;
    }
}